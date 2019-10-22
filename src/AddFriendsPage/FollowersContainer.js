import React from 'react'

const FollowersContainer = (props) => {
    // console.log(props.currentFollowers)
        return(
            <div>
                <h2>Followers</h2>
                {props.currentFollowers.map(follower => {
                    return(<p>{follower.username}</p>)
                })}
            </div>
        )
    }
export default FollowersContainer