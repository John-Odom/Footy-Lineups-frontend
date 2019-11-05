import React from 'react'
import LineupForm from '../forms_buttons/LineupForm'
import CreateLineupField from '../containers/CreateLineupField'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { storeTeams } from '../actions'
import { selectedClub } from '../actions'
import { updatePlayersOnTeam } from '../actions/updatePlayersOnTeam'



class LineupCreation extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            playersInLineup: {},
            redirect: false,
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/teams")
        .then(res=>res.json())
        .then(teams => {
            this.props.storeTeams(teams)
            this.props.selectedClub(teams[0])
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let reqObj = {
            method:"POST",
            headers:{"Content-Type": "application/json", "Accept":"application/json"},
            body:JSON.stringify({
                name:this.props.name,
                formation:"4-5-1",
                team:this.props.club,
                playersInLineup: this.state.playersInLineup,
                user:this.props.user,
            })
        }
        fetch("http://localhost:3000/lineups", reqObj)
        .then(res=>res.json())
        .then(data=>{
            this.setState({redirect:true})
        })
    }


    updatePlayer = (e, position) => {
        if(e.target.innerText){
            this.setState({
                playersInLineup: {...this.state.playersInLineup, [position]: (this.props.players.find( player => {
                    return (e.target.innerText==player.name)
                }))}
            })
        } else {
            this.setState({
                playersInLineup: {...this.state.playersInLineup, [position]: (this.props.players.find( player => {
                    return (e.target.parentNode.children[1].textContent==player.name)
                }))}
            })
        }
    }

    updateSelClub = (e) => {
        const chosenClub = this.props.clubs.find( club => {
                        return e.target.value === club["club_name"]
                        })
        this.props.updatePlayersOnTeam(chosenClub.players)
        this.props.selectedClub(chosenClub)
    }

    render() {
        return(
        this.state.redirect ? <Redirect to="/home" /> :
            <div>
                <LineupForm user={this.props.user} handleSubmit={this.handleSubmit} updateSelClub={this.updateSelClub} />
                <CreateLineupField updatePlayer={this.updatePlayer} key={this.props.user.id}/>
            </div>
        )
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
      storeTeams: (teams) =>{
        dispatch(storeTeams(teams))
      },
      selectedClub: (team) =>{
        dispatch(selectedClub(team))
      },
      updatePlayersOnTeam: (players) =>{
        dispatch(updatePlayersOnTeam(players))
      }
    }
  } 

  const mapStateToProps = (state) => {
    return {
      clubs: state.clubs,
      club: state.club,
      name: state.name,
      players: state.players
    }
  } 

export default connect(mapStateToProps, mapDispatchToProps)(LineupCreation)