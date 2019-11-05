import React from 'react' 
import {connect}from 'react-redux'

class ClubSelectionDropdown extends React.Component {
    render (){
        return(
            <div id="club-selection-dropdown">
                <select onChange={(e) => this.props.updateSelClub(e)}>
                    <option>Select {this.props.innerText} Club</option>
                    {this.props.clubs.map(club => {
                      return <option>{club.club_name}</option>  
                })}                        
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      clubs: state.clubs,
      club: state.club
    }
  } 

export default connect(mapStateToProps)(ClubSelectionDropdown)