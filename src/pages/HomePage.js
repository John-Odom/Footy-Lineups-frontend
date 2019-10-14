import React from 'react'
import HomeLineupContainer from '../containers/HomeLineupContainer'
import PostAuthNavBar from '../navBars/PostAuthNavBar'

const HomePage = () => {
    return(
        <div>
            <PostAuthNavBar />
            <HomeLineupContainer />
        </div>
    )
}
export default HomePage