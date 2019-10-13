import React from 'react';
import {withRouter} from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: "",
      bio: "",
      avatar: "",
      team: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({      
        user: this.state
      })

    }).then(res=> res.json())
    .then(data => {
      localStorage.setItem("jwt", data.jwt)
      this.props.history.push("/profile", data.jwt)
    }
      )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        Username:<input type="text"  onChange={this.handleChange} name="username" value={this.state.username}/><br />
        Password: <input type="text"  onChange={this.handleChange} name="password" value={this.state.password}/><br />
        Bio: <input type="text"  onChange={this.handleChange} name="bio" value={this.state.bio}/><br />
        Avatar: <input type="text"  onChange={this.handleChange} name="avatar" value={this.state.avatar}/><br />
        Team: <input type="text"  onChange={this.handleChange} name="team" value={this.state.team}/><br />
        <input type="submit" />
      </form>
    </div>
  );
}}

export default withRouter(SignupForm);
