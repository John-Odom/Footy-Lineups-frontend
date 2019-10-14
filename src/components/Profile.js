import React from 'react'
import SmallField from '../containers/SmallField'

export default class Profile extends React.Component {

state={
    user:null,
    lineups:null
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
    }
        )
    fetch("http://localhost:3000/lineups", {
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then(res => res.json())
    .then(lineups => {
        this.setState({lineups:lineups.filter( lineup => {
            return lineup.user_id == this.state.user.id
        })})
        })
}


  render() {
      return(
          <div>
              <p>{this.state.user ? this.state.user.username : "Username should be here"}</p>
              <p>{this.state.user ? this.state.user.bio : "bio goes here"}</p>
              <p>{this.state.user ? this.state.user.team : "team goes here"}</p>
              <div class="profile-field-container">
                {this.state.lineups ? this.state.lineups.map(lineup => {
                    return <SmallField lineup={lineup}/>
                }) : null }
              </div>
          </div>
      )
  }

}