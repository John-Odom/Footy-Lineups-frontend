import React from 'react'
import { Dropdown, Portal } from 'semantic-ui-react'
import { connect } from 'react-redux'



class DropdownExampleSearchSelection extends React.Component {

    state = {
        playerOptions: []
    }
    portal (){
        let playersWithText = []
        this.props.players.filter (player =>{
            player.text = player.name
            player.value = player.name
            return playersWithText.push(player)
        })
        return playersWithText
    }

    render() {
      const value = this.props.player ? this.props.player.name : null
        return (
            <div>
            <print>{this.props.name}:</print><br/>
            <Dropdown
              value={value}
              placeholder='Select Player'
              onChange = {(e) => this.props.updatePlayer(e, this.props.name)}
              // fluid
              search
              selection
              options={this.portal()}
            />
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
      players: state.players
    }
  } 

export default connect(mapStateToProps, null)(DropdownExampleSearchSelection)