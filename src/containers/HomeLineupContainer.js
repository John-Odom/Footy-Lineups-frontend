import React from 'react'
import SmallField from '../containers/SmallField'
import "../styles/HomeLineupContainer.css"

class HomePage extends React.Component {

    state={
        user:null,
        lineupsList:[]
    }
    
    componentDidMount=() => {
        fetch("http://localhost:3000/profile", {
            headers: {
              "Content-Type" : "application/json",
              "Accept" : "application/json",
              "Authorization": localStorage.getItem("jwt")
            }
          })
          .then(res => res.json())
          .then(data => {
              this.setState({user:data.user})
          })
        fetch("http://localhost:3000/lineups")
        .then(res=>res.json())
        .then(data=> {
            this.setState({lineupsList:data})
        })
    }

    render() {
        return(
            <div id="home-lineup-container">
                {this.state.lineupsList.reverse().map( lineup =>{
                    return <SmallField lineup={lineup} user={this.state.user}/>
                })}
            </div>
        )
    }
}
export default HomePage