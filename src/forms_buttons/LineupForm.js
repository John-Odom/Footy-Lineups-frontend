import React from 'react'
import '../styles/CreateLineup.css'

class LineupForm extends React.Component {

    render() {
        return(
            <div id="create-team-component">
                <form>
                    Team Name:<br />
                    <input type="text" name="teamName" value={this.props.name} onChange={this.props.updateName}/><br />
                    <select value={this.props.formation} onChange={this.props.updateFormation}>
                        <option value="4-5-1">4-5-1</option>
                        <option value="4-4-2">4-4-2</option>
                        <option value="4-3-3">4-3-3</option>
                        <option value="3-5-2">3-5-2</option>
                    </select>
                    <input type="submit" onClick={this.props.handleSubmit}/>
                </form>
            </div>
        )
}}

export default LineupForm