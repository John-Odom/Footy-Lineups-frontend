import React from 'react' 

class ClubSelectionDropdown extends React.Component {
    render (){
        return(
            <div id="club-selection-dropdown">
                <select onChange={(e) => this.props.updateSelectedClub(e)}>
                    <option>Select {this.props.innerText} Club</option>
                    {this.props.clubs.map(club => {
                      return <option>{club.club_name}</option>  
                })}                        
                </select>
            </div>
        )
    }
}
export default ClubSelectionDropdown