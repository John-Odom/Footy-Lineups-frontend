import React from 'react'
import LineupForm from '../forms_buttons/LineupForm'
import CreateLineupField from '../containers/CreateLineupField'
import { Redirect } from 'react-router-dom'
class LineupCreation extends React.Component{
    state = {
        name: "",
        formation: "4-5-1",
        goalkeeper: "",
        lb: "",
        lcb: "",
        rcb: "",
        rb: "",
        cdm: "",
        lcam: "",
        rcam: "",
        lw: "",
        striker: "",
        rw: "",
        playersOnTeam: [],
        clubs:[],
        selectedClub:null,
        redirect: false,
    }

    componentDidMount() {
        fetch("http://localhost:3000/teams")
        .then(res=>res.json())
        .then(data => {
            this.setState({clubs:data, selectedClub:data[0]})
        })
    }
    updateName = (e) => {
        this.setState({name: e.target.value})
    }
    updateFormation = (e) => {
        this.setState({formation: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let reqObj = {
            method:"POST",
            headers:{"Content-Type": "application/json", "Accept":"application/json"},
            body:JSON.stringify({
                data:this.state,
                user:this.props.user
            })
        }
        fetch("http://localhost:3000/lineups", reqObj)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({redirect:true})
        })
    }


    updatePlayer = (e, position) => {
        console.log(e.target.innerText)
        if(e.target.innerText){
            this.setState({[position]: (this.state.playersOnTeam.filter( player => {
            return (e.target.innerText==player.name)
        }))})} else {
            console.log(e.target.parentNode.children[1].innerText)
            this.setState({[position]: (this.state.playersOnTeam.filter( player => {
                return (e.target.parentNode.children[1].innerText==player.name)
            }))})
        }
    }

    dropdownHeader = () => { return <option value="">Player Name (Position)</option> }

    dropdownSelects = () => {
            return (this.state.playersOnTeam.map( (player) => {
                return <option value={player.name}> {player.name} ({player.position})</option>
            }))
    }

    updateSelectedClub = (e) => {
        const chosenClub = this.state.clubs.find( club => {
                        return e.target.value === club["club_name"]
                        })
        this.setState({selectedClub:chosenClub, playersOnTeam:chosenClub.players})
    }

    render() {
        return(
        this.state.redirect ? <Redirect to="/home" /> :
            <div>
                <LineupForm user={this.props.user} name={this.state.name} updateName={this.updateName} updateFormation={this.updateFormation} formation={this.state.formation} handleSubmit={this.handleSubmit} updateSelectedClub={this.updateSelectedClub} selectedClub={this.state.selectedClub} clubs={this.state.clubs} />
                <CreateLineupField updatePlayer={this.updatePlayer} dropdownHeader={this.dropdownHeader} 
                goalkeeper={this.state.goalkeeper}
                lb={this.state.lb}
                lcb={this.state.lcb}
                rcb={this.state.rcb}
                rb={this.state.rb}
                cdm={this.state.cdm}
                lcam={this.state.lcam}
                rcam={this.state.rcam}
                lw={this.state.lw}
                striker={this.state.striker}
                rw={this.state.rw}
                dropdownSelects={this.dropdownSelects} playersOnTeam={this.state.playersOnTeam} key={this.props.user.id}/>
            </div>
        )
    }   
}
export default LineupCreation