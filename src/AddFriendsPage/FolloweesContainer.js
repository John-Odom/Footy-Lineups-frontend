import React from 'react'

const FolloweesContainer = (props) => {
    console.log(props.currentFollowees)
        return(
            <div>
                <h2>Following</h2>
                {props.currentFollowees.map(followee => {
                    return(<p>{followee.username}</p>)
                })}
            </div>
        )
    }
export default FolloweesContainer