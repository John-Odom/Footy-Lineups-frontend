import React from 'react';
import {withRouter} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: "",
      redirect: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({      
        user: this.state
      })
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      this.props.handleLogout()
      localStorage.setItem("jwt", data.jwt)
      this.setState({redirect:true})
      document.location.reload()
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
    this.state.redirect ? <Redirect to="/home" /> :
    <div className="App">
      <form id="login-form" onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input type="text"  onChange={this.handleChange} name="username" value={this.state.username}/>
        <label>Password:</label>
        <input type="password"  onChange={this.handleChange} name="password" value={this.state.password}/>
        <input id="login-submit" type="submit" />
      </form>
    </div>
  );
}}

export default withRouter(LoginForm);
