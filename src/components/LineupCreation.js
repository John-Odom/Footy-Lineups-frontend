import React from 'react'
import ClubSelectionDropdown from '../forms_buttons/ClubSelectionDropdown'
import LineupForm from '../forms_buttons/LineupForm'
import CreateLineupField from '../containers/CreateLineupField'
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
        selectedClub:null
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
        })
    }

    updatePlayer = (e) => {
        this.setState({[e.target.name]: (this.state.playersOnTeam.filter( player => {
            return (e.target.value===player.name)
        }))})
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
                        } )
                        console.log(chosenClub.players)
        this.setState({selectedClub:chosenClub, playersOnTeam:chosenClub.players})
    }

    render() {
        
        return(
            <div>
                <ClubSelectionDropdown updateSelectedClub={this.updateSelectedClub} selectedClub={this.state.selectedClub} clubs={this.state.clubs}/>
                <LineupForm user={this.props.user} name={this.state.name} updateName={this.updateName} updateFormation={this.updateFormation} formation={this.state.formation} handleSubmit={this.handleSubmit}/>
                <CreateLineupField updatePlayer={this.updatePlayer} dropdownHeader={this.dropdownHeader} dropdownSelects={this.dropdownSelects}/>
            </div>
        )
    }   
}
export default LineupCreation