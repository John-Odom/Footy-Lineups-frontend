import React from 'react'

const ProfilePicture = (props) => {
        return(
            <div id="profile-picture-container">
                <img id="profile-picture" src={props.avatar} 
                onError={(e)=>{e.target.onerror = null; e.target.src="https://www.uclg-learning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-"}}/>
            </div>
        )
    }

export default ProfilePicture