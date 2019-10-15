import React from 'react'
import '../styles/EditLineupModal.css'

class EditLineupModal extends React.Component {
  state={
    goalkeeper: "",
    lb: "",
    lcb: "",
    rcb: "",
    rb: "",
    cdm: "",
    lcam: "",
    rcam: "",
    lw: "",
    striker: "",
    rw: "",
    playersOnTeam: []
  }

  componentDidMount () {
    this.setState({
      goalkeeper: this.props.lineup.lineup_players[0]["player_name"],
      lb: this.props.lineup.lineup_players[1]["player_name"],
      lcb: this.props.lineup.lineup_players[2]["player_name"],
      rcb: this.props.lineup.lineup_players[3]["player_name"],
      rb: this.props.lineup.lineup_players[4]["player_name"],
      cdm: this.props.lineup.lineup_players[5]["player_name"],
      lcam: this.props.lineup.lineup_players[6]["player_name"],
      rcam: this.props.lineup.lineup_players[7]["player_name"],
      lw: this.props.lineup.lineup_players[8]["player_name"],
      striker: this.props.lineup.lineup_players[9]["player_name"],
      rw: this.props.lineup.lineup_players[10]["player_name"]
    })
      fetch("http://localhost:3000/teams/488")
      .then(res=>res.json())
      .then(data => {
          this.setState({playersOnTeam: data.players})
      })
  }

  dropdownSelects = () => {
    return (this.state.playersOnTeam.map( (player) => {
      return <option key={player.id} value={player.name}> {player.name} ({player.position})</option>
    }))
  }

  updatePlayer = (e) => {
    const position = e.target.id.slice(6)
    console.log(position)
    this.setState({[position]: e.target.value})
    console.log(this.state)
  }

  submitEdit = (e) =>{
    console.log("edited!", e.target)
    const reqObj = {
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                data:this.state
              })
        }
    fetch(`http://localhost:3000/lineups/${e.target.dataset.id}`, reqObj)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }
  
  render() {
        return ( 
            <div id={`lineup_${this.props.lineup.id}`} className="modal">
                <div id="modal-content"className="modal-content">
                  <span data-id={this.props.lineup.id} onClick={(e)=>this.props.toggleModal(e, this.props.lineup)} className="close-button">&times;</span>
                  <div id="edit-team-div">
                    <h3>Edit Team</h3>
                    <div className="ui mini form"> 
                        <form id="edit-team-form" className="ui equal width form">
                          <div className="fields">
                            <div className="field">
                              <label>Team Name</label>
                              {/* <input placeholder="Team Name" type="text" value=""> */}
                            </div>
                            <div className="field">
                              <label>Goalkeeper</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-goalkeeper" className="position ui search selection dropdown">
                              <option>{this.state.goalkeeper}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>
                            <div className="field">
                              <label>Left Back</label>
                              <select onChange={(e)=>this.updatePlayer(e)} id="modal-lb" className="position ui search selection dropdown">
                              <option>{this.state.lb}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>
                            <div className="field">
                              <label>Left Center Back</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-lcb" className="position ui search selection dropdown">
                                <option>{this.state.lcb}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div> 
                            <div className="field">
                              <label>Right Center Back</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-rcb" className="position ui search selection dropdown">
                              <option>{this.state.rcb}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>  
                            <div className="field">
                              <label>Right Back</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-rb" className="position ui search selection dropdown">
                                <option>{this.state.rb}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>  
                          </div>
                          <div className="fields">
                            <div className="field">
                              <label>Center Defensive Mid</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-cdm" className="position ui search selection dropdown">
                                <option>{this.state.cdm}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>      
                            <div className="field">
                              <label>Left Attacking Mid</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-lcam" className="position ui search selection dropdown">
                                <option>{this.state.lcam}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>
                            <div className="field">
                              <label>Right Attacking Mid</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-rcam" className="position ui search selection dropdown">
                                <option>{this.state.rcam}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>   
                            <div className="field">
                              <label>Left Winger</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-lw" className="position ui search selection dropdown">
                                <option>{this.state.lw}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>   
                            <div className="field">
                              <label>Striker</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-striker" className="position ui search selection dropdown">
                                <option>{this.state.striker}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>     
                            <div className="field">
                              <label>Right Winger</label>
                              <select onChange={(e)=>{this.updatePlayer(e)}} id="modal-rw" className="position ui search selection dropdown">
                                <option>{this.state.rw}</option>
                                {this.dropdownSelects()}
                              </select>
                            </div>
                          </div>
                          <div data-id={this.props.lineup.id} onClick={(e) => this.submitEdit(e)} id="edit-team-button" className="ui submit button">Edit</div>
                      </form>
                    </div>
                  </div> 
            </div>
        </div>


        )
    }
  }

export default EditLineupModal