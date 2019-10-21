import React from 'react'

const ProfilePicture = (props) => {
        return(
            <div id="profile_picture">
                <img src={props.avatar} />
            </div>
        )
    }

export default ProfilePicture