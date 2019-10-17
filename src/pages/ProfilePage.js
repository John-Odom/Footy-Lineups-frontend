import React from 'react'
// import ProfileLineupContainer from '../containers/ProfileLineupContainer';
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import LineupContainer from '../containers/LineupContainer'
import ProfileInformation from '../containers/ProfileInformation'

class ProfilePage extends React.Component{
    state={
        lineupsList:[]
    }

    componentDidMount=() => {
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(lineups=> {
            this.setState({lineupsList:lineups.filter( lineup => {
                return lineup.user_id == this.props.user.id
            })})
        })
    }
    render(){
        return (
            
            <div>
                <PostAuthNavBar />
                <ProfileInformation />
                <LineupContainer user={this.props.user} lineupsList={this.state.lineupsList} />
            </div>
        )
    }
}

export default ProfilePage