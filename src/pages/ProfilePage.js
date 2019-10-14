import React from 'react'
import Profile from '../components/Profile';
import PostAuthNavBar from '../navBars/PostAuthNavBar'

const ProfilePage = () => {
    return (
        <div>
            <PostAuthNavBar />
            <Profile />
        </div>
    )
}

export default ProfilePage