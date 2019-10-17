import React from 'react'

class ClubSelectionDropdown extends React.Component {
    render (){
        return(
            <div>
                <select onChange={(e) => this.props.updateSelectedClub(e)}>
                    {this.props.clubs.map(club => {
                      return <option>{club.club_name}</option>  
                })}                        
                </select>
            </div>
        )
    }
}
export default ClubSelectionDropdown