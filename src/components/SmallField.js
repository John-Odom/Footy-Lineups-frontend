import React from 'react'
import '../styles/CreateLineup.css'
import '../styles/SmallField.css'
import SmallFieldButtons from '../forms_buttons/SmallFieldButtons'


class SmallField extends React.Component{
 
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
        this.props.toggleModal(e, this.props.lineup)
}

    render() {
        return(<div>
            <div data-id={this.props.lineup.id} className="small-show-teams-div">
                <div className="striker-area">
                  <div className="striker">
                    {this.props.findPlayer("striker")}
                  </div>
                </div>
                <div className = "winger-area">
                  <div className = "left-winger">
                  {this.props.findPlayer("lw")}
                    </div>
                  <div className = "right-winger">
                  {this.props.findPlayer("rw")}
                    </div>
                </div>
                <div className = "cam-area">
                  <div className = "left-cam">
                  {this.props.findPlayer("lcam")}
                  </div>
                  <div className = "right-cam">
                  {this.props.findPlayer("rcam")}
                  </div>
                </div>
                <div className = "cdm-area">
                  <div className = "cdm">
                  {this.props.findPlayer("cdm")}
                    </div>
                </div>
                <div className = "def-area">
                  <div className = "left-back">
                  {this.props.findPlayer("lb")}
                  </div>
                  <div className = "left-center-back">
                  {this.props.findPlayer("lcb")}
                  </div>
                  <div className = "right-center-back">
                  {this.props.findPlayer("rcb")}
                  </div>
                  <div className = "right-back">
                  {this.props.findPlayer("rb")}
                  </div>
                </div>
                <div className="goalkeeper-area">
                  <div className="goalkeeper">
                  {this.props.findPlayer("goalkeeper")}
                  </div>
                </div>
                {this.renderCrudButtons()}
        </div>
    </div>
        )
    }
}

export default SmallField