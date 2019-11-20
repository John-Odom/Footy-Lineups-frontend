import React from 'react'
import LineupContainer from '../containers/LineupContainer'
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import ProfilePicture from '../containers/ProfilePicture'
import '../styles/HomePage.css'

class HomePage extends React.Component {
    state={
        lineupsList:[]
    }

    componentDidMount=() => {
        this.resetLineups()
    }

    resetLineups = () => {
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(data=> {
            let viewableArrays=[]
            if(this.props.user){
            data.map(lineup => {
                if(lineup.user_id == this.props.user.id){
                    viewableArrays.push(lineup)
                }else {this.props.currentFollowees.map (followee =>{
                    if(lineup.user_id== followee.id ){
                        viewableArrays.push(lineup)
                    }
                })
            }})}
            this.setState({lineupsList:viewableArrays.reverse()})
        })
    }

    render() {
        if(this.props.user){
        return(
            <div id="home-page">
                <PostAuthNavBar avatar={this.props.user.avatar}/>
                <h3>Recent Lineups</h3> 
                <LineupContainer resetLineups={this.resetLineups} user={this.props.user} lineupsList={this.state.lineupsList}/>
            </div>
        )} else{
            return(null)
           }
    }
}
export default HomePage