import React from 'react'
import LineupContainer from '../containers/LineupContainer'
import PostAuthNavBar from '../navBars/PostAuthNavBar'

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

    render() {
        return(
            <div>
                <PostAuthNavBar />
                <LineupContainer user={this.props.user} lineupsList={this.state.lineupsList}/>
            </div>
        )
    }
}
export default HomePage