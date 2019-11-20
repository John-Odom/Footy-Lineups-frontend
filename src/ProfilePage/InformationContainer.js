import React from 'react'

const ProfileInformation = (props) => {
        return(
            <div>
                <li>Name: {props.user.username}</li>
                <li>About {props.user.bio}</li>
                <li>Favorite Team: {props.user.team.club_name}</li>
                {/* <li>Favorite Team: {props.user.team.club_name}</li> */}
            </div>
        )
    }
export default ProfileInformation