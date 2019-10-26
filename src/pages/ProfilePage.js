import React from 'react'
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import LineupContainer from '../containers/LineupContainer'
import ProfileInformation from '../ProfilePage/ProfileInformation'
import BackgroundImage from '../ProfilePage/BackgroundImage'
import '../styles/ProfilePage.css'


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

    resetLineups = () => {
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(lineups=> {
            this.setState({lineupsList:lineups.filter( lineup => {
                return lineup.user_id == this.props.user.id
            })})})
    }

    render(){
        if(this.props.user){
        return (
            <div>
                <div id="profile-page">
                    <PostAuthNavBar avatar={this.props.user.avatar}/>
                    {/* <ProfilePicture  avatar={this.props.user.avatar}/> */}
                    <ProfileInformation user={this.props.user} />
                    <h2> Your Lineups </h2>
                    <LineupContainer user={this.props.user} resetLineups={this.resetLineups} lineupsList={this.state.lineupsList} />
                </div>
            </div>
        )} else {
        return(
            <div></div>
        )
    }
    }
}

export default ProfilePage