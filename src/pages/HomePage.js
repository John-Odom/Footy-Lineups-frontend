import React from 'react'
import LineupContainer from '../containers/LineupContainer'
import PostAuthNavBar from '../navBars/PostAuthNavBar'
import ProfilePicture from '../containers/ProfilePicture'

class HomePage extends React.Component {
    state={
        lineupsList:[]
    }

    componentDidMount=() => {
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(data=> {
            this.setState({lineupsList:data.reverse()})
        })
    }

    resetLineups = () => {
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(data=> {
            this.setState({lineupsList:data.reverse()})
        })
    }

    render() {
        if(this.props.user){
        return(
            <div>
                <PostAuthNavBar />
                <ProfilePicture avatar={this.props.user.avatar}/>
                <LineupContainer resetLineups={this.resetLineups} user={this.props.user} lineupsList={this.state.lineupsList}/>
            </div>
        )} else{
            return(null)
           }
    }
}
export default HomePage