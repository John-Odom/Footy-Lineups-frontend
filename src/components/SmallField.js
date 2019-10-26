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
      // console.log(this.props.lineup.formation)
        return(
        <div>
            <div data-id={this.props.lineup.id} className="small-show-teams-div">
                <div className="striker-area">
                  <div className="striker422">
                    <div class="position-text">{this.props.striker}</div>
                  </div>
                </div>
                <div className = "winger-area">
                  <div className = "lw422">
                  <span class="position-text">{this.props.lw}</span>
                    </div>
                  <div className = "rw422">
                  <span class="position-text">{this.props.rw}</span>
                    </div>
                </div>
                <div className = "cam-area">
                  <div className = "lcam422">
                  <span class="position-text">{this.props.lcam}</span>
                  </div>
                  <div className = "rcam422">
                  <span class="position-text">{this.props.rcam}</span>
                  </div>
                </div>
                <div className = "cdm-area">
                  <div className = "cdm422">
                  <span class="position-text">{this.props.cdm}</span>
                    </div>
                </div>
                <div className = "def-area">
                  <div className = "lb">
                  <span class="position-text">{this.props.lb}</span>
                  </div>
                  <div className = "lcb">
                  <span class="position-text">{this.props.lcb}</span>
                  </div>
                  <div className = "rcb">
                  <span class="position-text">{this.props.rcb}</span>
                  </div>
                  <div className = "rb">
                  <span class="position-text">{this.props.rb}</span>
                  </div>
                </div>
                <div className="goalkeeper-area">
                  <div className="goalkeeper">
                  <span class="position-text">{this.props.goalkeeper}</span>
                  </div>
                </div>
                {this.renderCrudButtons()}
        </div>
    </div>
        )
    }
}

export default SmallField