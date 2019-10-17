import React from 'react'
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import LineupCreation from '../components/LineupCreation'

const CreatePage = (props) => {
    return(
        <div>
            <PostAuthNavBar />
            <LineupCreation user={props.user} />
        </div>
    )
}

export default CreatePage