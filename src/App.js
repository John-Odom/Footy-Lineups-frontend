import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import "./App.css"
import "./styles/Form.css"

class App extends React.Component {
state = {
  user:null
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
    })
}

  render() {
    return (
      <div>
        <BrowserRouter>
        
            <div className="App-content">
              <Switch>
                <Route 
                exact path="/signup" 
                render={(props) => <SignupPage{...props} user={this.state.user} />} 
                />
                <Route 
                exact path="/login" 
                component={LoginPage} 
                />
                <Route
                exact path="/profile"
                render={(props) => <ProfilePage{...props} user={this.state.user} />} 
                 />
                <Route 
                exact path="/home" 
                render={(props) => <HomePage{...props} user={this.state.user} />} 
                />
                <Route 
                exact path="/create" 
                render={(props) => <CreatePage{...props} user={this.state.user} />} 
                />
              </Switch>
              
            </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
