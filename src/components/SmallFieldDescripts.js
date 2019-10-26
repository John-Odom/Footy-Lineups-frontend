import React from 'react'

const SmallFieldDescripts = (props) => {
        return(
            <div className="small-field-descripts">
                <div className="lineup-name">Lineup: <p> {props.lineup.name ? props.lineup.name : "No Name Given"}</p></div>
                <div className="club-name"> {props.lineup.team.club_name}</div>
                <div className="created-by"> User:<p>{props.lineup.user.username}</p></div>
                
            </div>
        )
    }
export default SmallFieldDescripts