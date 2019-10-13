import React from 'react'



export default class Profile extends React.Component {

state={
    user:null
}

componentDidMount () {
    fetch("http://localhost:3000/profile", {
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json())
    .then(data => {
      debugger
        this.setState({user:data.user})
    }
        )
  }

  render() {
      return(
          <div>
              <p>{this.state.user ? this.state.user.username : "Username should be here"}</p>
              <p>{this.state.user ? this.state.user.bio : "bio goes here"}</p>
              <p>{this.state.user ? this.state.user.team : "team goes here"}</p>
          </div>
      )
  }

}