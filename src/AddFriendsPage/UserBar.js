import React from 'react'


class UserBar extends React.Component {
    render () {
        return(
            <div>
                {this.props.user.username}  
                {this.props.currentFollowees.some(followee => followee.id === this.props.user.id) ? 
                <button data_id={this.props.user.id} onClick={()=>this.props.unFollow(this.props.user)} className="ui button">Following</button>:
                <button data_id={this.props.user.id} onClick={()=>this.props.addToFollowers(this.props.user)} className="ui blue button">Follow</button>
                }
            </div>
        )
    }
}
export default UserBar