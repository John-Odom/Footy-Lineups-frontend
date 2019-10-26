import React from 'react';
import {withRouter} from 'react-router-dom'
import ClubSelectionDropdown from './ClubSelectionDropdown';

class SignupForm extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      username: "",
      password: "",
      bio: "",
      avatar: "",
      team: "",
      teamsList: []
    }
  }

  componentDidMount () {
    fetch("http://localhost:3000/teams")
    .then(res=>res.json())
    .then(data => {
      this.setState({teamsList:data})
  })
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
      this.props.history.push("/create", data.jwt)
      document.location.reload()
    }
      )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateSelectedClub = (e) => {
    this.setState({team: this.state.teamsList.find(team=>{
      return team.club_name===e.target.value
    })
      })
  }

  render() {
  return (
    <div className="App">
      <form id="signup-form" onSubmit={this.handleSubmit}>
        Username:<input type="text"  onChange={this.handleChange} name="username" value={this.state.username}/><br />
        Password: <input type="text"  onChange={this.handleChange} name="password" value={this.state.password}/><br />
        Bio: <input type="text"  onChange={this.handleChange} name="bio" value={this.state.bio}/><br />
        Profile Picture: <input type="text"  onChange={this.handleChange} name="avatar" value={this.state.avatar}/><br />
        {/* Team: <input type="text"  onChange={this.handleChange} name="team" value={this.state.team}/><br /> */}
        <ClubSelectionDropdown innerText="Your Favorite" clubs={this.state.teamsList} updateSelectedClub={this.updateSelectedClub}/>
        <input id="signup-submit" type="submit" />
      </form>
    </div>
  );
}}

export default withRouter(SignupForm);
