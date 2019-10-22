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
                    {this.props.striker}
                  </div>
                </div>
                <div className = "winger-area">
                  <div className = "lw422">
                  {this.props.lw}
                    </div>
                  <div className = "rw422">
                  {this.props.rw}
                    </div>
                </div>
                <div className = "cam-area">
                  <div className = "lcam422">
                  {this.props.lcam}
                  </div>
                  <div className = "rcam422">
                  {this.props.rcam}
                  </div>
                </div>
                <div className = "cdm-area">
                  <div className = "cdm422">
                  {this.props.cdm}
                    </div>
                </div>
                <div className = "def-area">
                  <div className = "lb">
                  {this.props.lb}
                  </div>
                  <div className = "lcb">
                  {this.props.lcb}
                  </div>
                  <div className = "rcb">
                  {this.props.rcb}
                  </div>
                  <div className = "rb">
                  {this.props.rb}
                  </div>
                </div>
                <div className="goalkeeper-area">
                  <div className="goalkeeper">
                  {this.props.goalkeeper}
                  </div>
                </div>
                {this.renderCrudButtons()}
        </div>
    </div>
        )
    }
}

export default SmallField