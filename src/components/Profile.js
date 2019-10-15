import React from 'react'
import SmallField from '../containers/SmallField'
import EditLineupModal from '../forms_buttons/EditLineupModal'
import '../styles/EditLineupModal.css'


export default class Profile extends React.Component {

state={
    user:null,
    lineups:null,
    currentLineup:null
    // toggle: false
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
        this.setState({currentLineup:lineups.find( lineup => {
          return lineup.user_id == this.state.user.id
      })})
      })
}
toggleModal = (e, lineup) => {
  console.log(e.target)
  this.setState({currentLineup:lineup, toggle:!this.state.toggle})
  const modal = document.getElementById(`lineup_${e.target.dataset.id}`);
  modal.classList.toggle("show-modal");
}

  render() {
      return(
          <div>
              <p>{this.state.user ? this.state.user.username : "Username should be here"}</p>
              <p>{this.state.user ? this.state.user.bio : "bio goes here"}</p>
              <p>{this.state.user ? this.state.user.team : "team goes here"}</p>
              <div className="profile-field-container">
                {this.state.lineups ? this.state.lineups.map(lineup => {
                    return (
                      <div>
                        <SmallField currentLineup={lineup} toggleModal={this.toggleModal} lineup={lineup} user={this.state.user}/>,
                        <EditLineupModal toggleModal={this.toggleModal} lineup={lineup} />
                      </div>
                      )
                }) : null }
                {/* {this.state.currentLineup ? <EditLineupModal toggleModal={this.toggleModal} lineup={this.state.currentLineup} /> : null} */}
              </div>
              
          </div>
      )
  }

}