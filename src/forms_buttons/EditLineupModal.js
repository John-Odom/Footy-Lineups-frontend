import React from 'react'
import '../styles/EditLineupModal.css'

class EditLineupModal extends React.Component {

  render() {
        return ( 
            <div id={`lineup_${this.props.lineup.id}`} className="edit-lineup-modal">
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
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-goalkeeper" className="position ui search selection dropdown">
                              <option>{this.props.goalkeeper}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>
                            <div className="field">
                              <label>Left Back</label>
                              <select onChange={(e)=>this.props.updatePlayer(e)} id="modal-lb" className="position ui search selection dropdown">
                              <option>{this.props.lb}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>
                            <div className="field">
                              <label>Left Center Back</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-lcb" className="position ui search selection dropdown">
                                <option>{this.props.lcb}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div> 
                            <div className="field">
                              <label>Right Center Back</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-rcb" className="position ui search selection dropdown">
                              <option>{this.props.rcb}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>  
                            <div className="field">
                              <label>Right Back</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-rb" className="position ui search selection dropdown">
                                <option>{this.props.rb}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>  
                          </div>
                          <div className="fields">
                            <div className="field">
                              <label>Center Defensive Mid</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-cdm" className="position ui search selection dropdown">
                                <option>{this.props.cdm}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>      
                            <div className="field">
                              <label>Left Attacking Mid</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-lcam" className="position ui search selection dropdown">
                                <option>{this.props.lcam}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>
                            <div className="field">
                              <label>Right Attacking Mid</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-rcam" className="position ui search selection dropdown">
                                <option>{this.props.rcam}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>   
                            <div className="field">
                              <label>Left Winger</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-lw" className="position ui search selection dropdown">
                                <option>{this.props.lw}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>   
                            <div className="field">
                              <label>Striker</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-striker" className="position ui search selection dropdown">
                                <option>{this.props.striker}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>     
                            <div className="field">
                              <label>Right Winger</label>
                              <select onChange={(e)=>{this.props.updatePlayer(e)}} id="modal-rw" className="position ui search selection dropdown">
                                <option>{this.props.rw}</option>
                                {this.props.dropdownSelects()}
                              </select>
                            </div>
                          </div>
                          <div data-id={this.props.lineup.id} onClick={(e) => this.props.submitEdit(e)} id="edit-team-button" className="ui submit button">Edit</div>
                      </form>
                    </div>
                  </div> 
            </div>
        </div>


        )
    }
  }

export default EditLineupModal