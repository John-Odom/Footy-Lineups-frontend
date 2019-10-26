import React from 'react'
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import RenderUsers from '../AddFriendsPage/RenderUsers'
import '../styles/AddFriendsPage.css'

class AddFriendsPage extends React.Component {

    render() {
        if(this.props.user){
        return(
            <div id="add-friends-page">
                <PostAuthNavBar avatar={this.props.user.avatar}/>
                <RenderUsers currentFollowees={this.props.currentFollowees} addToFollowers={this.props.addToFollowers} unFollow = {this.props.unFollow}user={this.props.user}/>
            </div>
        )} else{
         return(null)
        }
    }
}

export default AddFriendsPage