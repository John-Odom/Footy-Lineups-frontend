import React from 'react'
import SmallFieldCard from './SmallFieldCard'
import "../styles/LineupContainer.css"

class LineupContainer extends React.Component {
    render() {
        return(
            <div id="lineup-container">
                {this.props.lineupsList.map( lineup =>{
                    return (
                            <SmallFieldCard resetLineups={this.props.resetLineups} user={this.props.user} lineup={lineup} user={this.props.user} />
                    )
                    })}
            </div>
        )
    }
}
export default LineupContainer
