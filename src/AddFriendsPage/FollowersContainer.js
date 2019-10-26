import React from 'react'

const FollowersContainer = (props) => {
    // console.log(props.currentFollowers)
        return(
            <div id="followers-container">
                <div id="followers">
                    <h2>Your Followers({props.currentFollowers.length})</h2>
                    {props.currentFollowers.map(follower => {
                        return(<p>{follower.username}</p>)
                    })}
                </div>
            </div>
        )
    }
export default FollowersContainer