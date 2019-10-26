import React from 'react'
import UserBar from './UserBar'

const UserContainer =(props) => {
    return(
        <div id="user-container">
            {props.usersList.map(user=>{
                return(<UserBar user={user} 
                    addToFollowers={props.addToFollowers}
                    usersList={props.usersList}
                    currentFollowers={props.currentFollowers} 
                    currentFollowees={props.currentFollowees}
                    unFollow={props.unFollow} />)
            })}
        </div>
    )
}
export default UserContainer