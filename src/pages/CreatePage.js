import React from 'react'
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import LineupCreation from '../components/LineupCreation'
import ProfilePicture from '../containers/ProfilePicture'

const CreatePage = (props) => {
    if(props.user){
    return(
        <div>
            <PostAuthNavBar />
            <ProfilePicture avatar={props.user.avatar}/>
            <LineupCreation user={props.user} />
        </div>
    )} else{
     return(null)
    }
}

export default CreatePage