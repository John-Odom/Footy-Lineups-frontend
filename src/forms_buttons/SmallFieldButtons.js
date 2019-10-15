import React from 'react'

const SmallFieldButtons =(props) => {
        return(
            <div className="team-buttons-div">
                    <div className="delete-team-button-div">
                      <button data-id={props.lineup_id} onClick={(e) => props.deleteLineup(e)} className="ui red button delete-team-button">Delete</button>
                    </div>
                    <div className="edit-team-button-div">
                      <button data-id={props.lineup_id} onClick={(e) => props.editLineup(e)} className="ui blue button edit-team-button">Edit</button>
                    </div>
            </div> 
        )
    }
export default SmallFieldButtons