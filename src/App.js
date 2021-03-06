import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import AddFriendsPage from './pages/AddFriendsPage';
import "./App.css"
import "./styles/Form.css"

class App extends React.Component {
state = {
  user:null,
  currentFollowees:[]
}

componentDidMount = () => {
    fetch("http://localhost:3000/profile", {
          headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization": localStorage.getItem("jwt")
          }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({user:data.user}) 
            if (this.state.user){
            this.setState({currentFollowees:data.user.followees})
        } 
      })
}



  addToFollowers = (user) => {
    this.setState({currentFollowees: [...this.state.currentFollowees, user]})
    let reqObj={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            follower_id: this.state.user.id,
            followee_id: user.id
        })
    }
    fetch("http://localhost:3000/follows", reqObj)
    .then(res => res.json())
    .then(data=>{
        console.log(data)
    })
  }

  unFollow = (followee) => {
    this.setState({currentFollowees: [...this.state.currentFollowees.filter(oldFollowee =>{
       return oldFollowee.id !== followee.id
    })]})
    fetch("http://localhost:3000/follows")
    .then(res => res.json())
    .then(data=>{
        const follow = data.find(obj =>{
            return(obj.follower.id ===this.state.user.id && obj.followee.id === followee.id)
        })
        fetch(`http://localhost:3000/follows/${follow.id}`, {method:"DELETE"})
        .then(res => res.json())
        .then(data=>{
            console.log(data)
        })
    })
  }

  handleLogout = () =>{
    this.setState({user:null})
  }

  getRoutes = () => {
    if(localStorage.jwt)
      return (
        <Switch>
          <Route
          exact path="/profile"
          render={(props) => <ProfilePage{...props} user={this.state.user} />} 
           />
          <Route 
          exact path="/home" 
          render={(props) => <HomePage{...props} user={this.state.user} currentFollowees={this.state.currentFollowees}/>} 
          />
          <Route 
          exact path="/create" 
          render={(props) => <CreatePage{...props} user={this.state.user} />} 
          />
          <Route 
          exact path="/add" 
          render={(props) => <AddFriendsPage{...props} user={this.state.user} currentFollowees={this.state.currentFollowees} addToFollowers={this.addToFollowers} unFollow = {this.unFollow}/>} 
          />
          <Route 
          exact path="/login" 
          render={(props) => <LoginPage{...props} authorize={this.authorize} handleLogout={this.handleLogout} />} 
          />

          <Redirect to='/home' />
        </Switch>
      )
    else
      return (
      <Switch>
        <Route 
        exact path="/signup" 
        render={(props) => <SignupPage{...props} user={this.state.user} />} 
        />
        <Route 
        exact path="/login" 
        render={(props) => <LoginPage{...props} authorize={this.authorize} handleLogout={this.handleLogout} />} 
        />
        <Route 
          exact path="/home" 
          render={(props) => <HomePage{...props} user={this.state.user} currentFollowees={this.state.currentFollowees}/>} 
        />
        <Redirect to='/login' />
      </Switch>
    )
  }


  render() {
    return (
      <div>
        <BrowserRouter>
            <div className="App-content">
              { this.getRoutes() }
            </div>
              }
        </BrowserRouter>
      </div>
    )
  }
}




export default App;
