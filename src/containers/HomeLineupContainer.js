import React from 'react'
import LineupCard from '../components/LineupCard'

class HomePage extends React.Component {

    state={
        lineupsList:[]
    }
    
    componentDidMount=() => {
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(data=> {
            this.setState({lineupsList:data})
        })
    }

    render() {
        return(
            <div id="home-lineup-container">
                {this.state.lineupsList.map( lineup =>{
                    return <LineupCard lineup={lineup} key={lineup.id}/>
                })}
            </div>
        )
    }
}
export default HomePage