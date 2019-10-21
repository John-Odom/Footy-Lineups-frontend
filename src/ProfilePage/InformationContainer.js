import React from 'react'

const ProfileInformation = (props) => {
        return(
            <div>
                <li>Name: {props.user.username}</li>
                <li>About {props.user.bio}</li>
                <li>Favorite Team: {props.user.team}</li>
            </div>
        )
    }
export default ProfileInformation