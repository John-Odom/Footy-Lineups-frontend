import React from 'react'
import SmallFieldCard from './SmallFieldCard'
import "../styles/HomeLineupContainer.css"

class HomePageContainer extends React.Component {
    
    render() {
        return(
            <div id="home-lineup-container">
                {this.props.lineupsList.map( lineup =>{
                    return (
                        <div>
                            <SmallFieldCard user={this.props.user} lineup={lineup} user={this.props.user} />
                        </div>
                    )
                    })}
            </div>
        )
    }
}
export default HomePageContainer
