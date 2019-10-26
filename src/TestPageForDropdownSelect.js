import React from 'react'
import { Dropdown, Portal } from 'semantic-ui-react'



class DropdownExampleSearchSelection extends React.Component {

    state = {
        playerOptions: []
    }
    portal (){
        let playersWithText = []
        this.props.playersOnTeam.filter (player =>{
            player.text = player.name
            player.value = player.name
            // return !this.props.playersOnTeam.includes(this.props.striker).push(player)
            return playersWithText.push(player)
        })
        return playersWithText
    }

    render() {
        return (
            <div>
            <print>{this.props.name}:</print><br/>
            <Dropdown
              placeholder='Select Player'
              onChange = {(e) => this.props.updatePlayer(e, this.props.name)}
            //   fluid
              search
              selection
              options={this.portal()}
            />
            </div>)
    }
}

export default DropdownExampleSearchSelection