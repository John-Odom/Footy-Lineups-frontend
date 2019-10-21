import React from 'react'
import InformationContainer from './InformationContainer'
import UpdateInfoModal from './UpdateInfoModal'
import Avatar from './Avatar'
import { Redirect, withRouter } from 'react-router-dom';

class ProfileInformation extends React.Component {
    state={
        username:null,
        avatar:null,
        bio:null,
        team:null,
        teamsList:[]
    }

    componentDidMount() {
        fetch("http://localhost:3000/teams")
        .then(res=>res.json())
        .then(data => {
            this.setState({teamsList:data,
                username:this.props.user.username,
                avatar:this.props.user.avatar,
                bio:this.props.user.bio,
                team:this.props.user.team,
            })
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = () => {
        console.log("submitted")
        const reqObj = {
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                user_id: this.props.user.id,
                username:this.state.username,
                avatar:this.state.avatar,
                bio:this.state.bio,
                team:this.state.team,
              })
        }
        fetch(`http://localhost:3000/users/${this.props.user.id}`, reqObj)
        .then(res=>res.json())
        .then(data=>{
            return <Redirect to="/profile" />
        })
    }
   
    render(){
        return(
            <div>
                <InformationContainer user={this.props.user} />
                <UpdateInfoModal username={this.state.username}
                bio={this.state.bio} teamsList={this.state.teamsList}
                team={this.state.team} avatar={this.state.avatar} 
                handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.props.user} />
            </div>
        )
        
    }
}

export default withRouter(ProfileInformation)