import React from 'react'

const SmallFieldDescripts = (props) => {
        return(
            <div>
                <p>Lineup Name: {props.lineup.name ? props.lineup.name : "No Name Given"} Created By:{props.lineup.user.username}</p>
                <h5>Club:  {props.lineup.team.club_name}</h5>
            </div>
        )
    }
export default SmallFieldDescripts