import React from 'react'


class UserBar extends React.Component {
    render () {
        return(
            <div className="follow-user-bar">
                <div id="user-name">{this.props.user.username}</div>
                <div id="follow-button">
                    {this.props.currentFollowees.some(followee => followee.id === this.props.user.id) ? 
                    <button data_id={this.props.user.id} onClick={()=>this.props.unFollow(this.props.user)} className="ui button">Following</button>:
                    <button data_id={this.props.user.id} onClick={()=>this.props.addToFollowers(this.props.user)} className="ui blue button">Follow</button>
                    }
                </div>
            </div>
        )
    }
}
export default UserBar