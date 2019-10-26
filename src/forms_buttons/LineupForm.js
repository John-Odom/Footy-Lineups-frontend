import React from 'react'
import '../styles/CreateLineup.css'
import ClubSelectionDropdown from '../forms_buttons/ClubSelectionDropdown'

class LineupForm extends React.Component {

    render() {
        return(
            <div id="create-team-form">
                    <div id="post-team-name">
                        <label>Team Name:</label>
                        <input type="text" name="teamName" value={this.props.name} onChange={this.props.updateName}/><br />
                    </div>
                    <ClubSelectionDropdown innerText="a" updateSelectedClub={this.props.updateSelectedClub} selectedClub={this.props.selectedClub} clubs={this.props.clubs}/>
                    <div id="post-lineup-div"><button type="submit" className="ui blue button" onClick={this.props.handleSubmit}> Post Lineup</button></div>
            </div>
        )
}}

export default LineupForm