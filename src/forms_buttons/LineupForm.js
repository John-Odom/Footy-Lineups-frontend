import React from 'react'
import { connect } from 'react-redux'
import '../styles/CreateLineup.css'
import ClubSelectionDropdown from '../forms_buttons/ClubSelectionDropdown'
import { setName } from '../actions/setName'

class LineupForm extends React.Component {

    updateName = (e) => {
        this.props.setName(e.target.value)
    }

    render() {
        return(
            <div id="create-team-form">
                    <div id="post-team-name">
                        <label>Team Name:</label>
                        <input type="text" name="teamName" value={this.props.name} onChange={(e)=>this.updateName(e)}/><br />
                    </div>
                    <ClubSelectionDropdown innerText="a" updateSelClub={this.props.updateSelClub} />
                    <div id="post-lineup-div">
                      <button type="submit" className="ui blue button" onClick={this.props.handleSubmit}>
                         Post Lineup
                      </button>
                    </div>
            </div>
        )
}}

const mapDispatchToProps = (dispatch) => {
    return {
      setName: (name) =>{
        dispatch(setName(name))
      },
    }
  } 

export default connect(null, mapDispatchToProps)(LineupForm)