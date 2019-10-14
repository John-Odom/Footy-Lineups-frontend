import React from 'react'
import '../styles/CreateLineup.css'

class LineupForm extends React.Component {
    state = {
        user:null,
        teamName: "",
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
        playersOnTeam: []
    }
    componentDidMount() {
        fetch("http://localhost:3000/teams/482")
        .then(res=>res.json())
        .then(data => {
            this.setState({playersOnTeam: data.players})
        })
        fetch("http://localhost:3000/profile", {
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json())
    .then(data => {
        this.setState({user:data.user})
    }
        )
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
                data:this.state
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
            return (this.state.playersOnTeam.map( player => {
                return <option value={player.name}> {player.name} ({player.position})</option>
            }))
    }

    render() {
        return(
            <div id="create-team-component">
                <form>
                    Team Name:<br />
                    <input type="text" name="teamName" value={this.state.name} onChange={this.updateName}/><br />
                    <select value={this.state.formation} onChange={this.updateFormation}>
                        <option value="4-5-1">4-5-1</option>
                        <option value="4-4-2">4-4-2</option>
                        <option value="4-3-3">4-3-3</option>
                        <option value="3-5-2">3-5-2</option>
                    </select>
                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
                <div className="show-teams-div">
                    <div className="striker-area">
                      <div className="striker">
                          <select name="striker" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                    </div>
                    </div>
                    <div className = "winger-area">
                      <div className = "left-winger">
                          <select name="lw" onChange={this.updatePlayer}>
                          {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                        </div>
                      <div className = "right-winger">
                          <select name="rw" onChange={this.updatePlayer}>
                          {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                        </div>
                    </div>
                    <div className = "cam-area">
                      <div className = "left-cam">
                            <select name="lcam" onChange={this.updatePlayer}>
                            {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "right-cam">
                            <select name="rcam" onChange={this.updatePlayer}>
                            {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                    <div className = "cdm-area">
                      <div className = "cdm">
                            <select name="cdm" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                        </div>
                    </div>
                    <div className = "def-area">
                      <div className = "left-back">
                            <select name="lb" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "left-center-back">
                            <select name="lcb" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "right-center-back">
                            <select name="rcb" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "right-back">
                            <select name="rb" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                    <div className="goalkeeper-area">
                      <div className="goalkeeper">
                            <select name="goalkeeper" onChange={this.updatePlayer}>
                                {this.dropdownHeader()}
                                {this.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                </div>
            </div>
        )
}}

export default LineupForm