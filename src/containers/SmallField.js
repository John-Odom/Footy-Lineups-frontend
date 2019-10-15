import React from 'react'
import '../styles/CreateLineup.css'
import '../styles/SmallField.css'
import SmallFieldButtons from '../forms_buttons/SmallFieldButtons'
import EditLineupModal from '../forms_buttons/EditLineupModal'


class SmallField extends React.Component{

findPlayer = (position) => {
    return this.props.lineup.lineup_players.find(lineupPlayerObj => lineupPlayerObj["position"]==position)["player_name"]
}

renderCrudButtons= () =>{
    if(this.props.user.id && this.props.lineup.user_id == this.props.user.id) {
        return <SmallFieldButtons editLineup={this.editLineup} deleteLineup={this.deleteLineup} lineup_id={this.props.lineup.id}/>
    }
}

deleteLineup = (e) => {
    fetch(`http://localhost:3000/lineups/${e.target.dataset.id}`, {method:"DELETE"})
    .then(res=>res.json())
    .then(message => {
        console.log(message)
    })
}

editLineup = (e) => {
    // console.log("toggled!")
        this.props.toggleModal(e, this.props.lineup)
}

    render() {
        return(<div>
            <div data-id={this.props.lineup.id} className="small-show-teams-div">
                <div className="striker-area">
                  <div className="striker">
                    {this.findPlayer("striker")}
                  </div>
                </div>
                <div className = "winger-area">
                  <div className = "left-winger">
                  {this.findPlayer("lw")}
                    </div>
                  <div className = "right-winger">
                  {this.findPlayer("rw")}
                    </div>
                </div>
                <div className = "cam-area">
                  <div className = "left-cam">
                  {this.findPlayer("lcam")}
                  </div>
                  <div className = "right-cam">
                  {this.findPlayer("rcam")}
                  </div>
                </div>
                <div className = "cdm-area">
                  <div className = "cdm">
                  {this.findPlayer("cdm")}
                    </div>
                </div>
                <div className = "def-area">
                  <div className = "left-back">
                  {this.findPlayer("lb")}
                  </div>
                  <div className = "left-center-back">
                  {this.findPlayer("lcb")}
                  </div>
                  <div className = "right-center-back">
                  {this.findPlayer("rcb")}
                  </div>
                  <div className = "right-back">
                  {this.findPlayer("rb")}
                  </div>
                </div>
                <div className="goalkeeper-area">
                  <div className="goalkeeper">
                  {this.findPlayer("goalkeeper")}
                  </div>
                </div>
                {this.renderCrudButtons()}

                {/* <div className="team-buttons-div">
                    <div class="delete-team-button-div">
                      <button data-id={this.props.lineup.id} class = "ui red button delete-team-button">Delete</button>
                    </div>
                    <div class="edit-team-button-div">
                      <button data-id={this.props.lineup.id} class="ui blue button edit-team-button">Edit</button>
                    </div>
                </div> */}
        </div>
    </div>
        )
    }
}

export default SmallField