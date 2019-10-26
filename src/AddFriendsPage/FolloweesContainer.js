import React from 'react'

const FolloweesContainer = (props) => {
        return(
            <div id="followees-container">
                <div id="followees">
                    <h2>Following ({props.currentFollowees.length})</h2>
                    {props.currentFollowees.map(followee => {
                        return(<p>{followee.username}</p>)
                    })}
                </div>
            </div>
        )
    }
export default FolloweesContainer