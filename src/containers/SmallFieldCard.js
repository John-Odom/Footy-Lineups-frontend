import React from 'react'
import SmallField from '../components/SmallField'
import FieldLikes from '../components/FieldLikes'
import FieldComments from '../components/FieldComments'
import EditLineupModal from '../forms_buttons/EditLineupModal'

class SmallFieldCard extends React.Component {

    state={
        currentLineup:null,
        likes:this.props.lineup.likes.length,
        comments:this.props.lineup.comments,
        textContent:""
    }

    findPlayer = (position) => {
        return this.props.lineup.lineup_players.find(lineupPlayerObj => lineupPlayerObj["position"]==position)["player_name"]
    }

    likeLineup = (lineup) => {
        this.setState({likes:this.state.likes+1})
        const reqObj = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({
                lineup: lineup,
                user: this.props.user
            })
        }
        fetch("http://localhost:3000/likes", reqObj)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
        })
    }

    toggleModal = (e, lineup) => {
        this.setState({currentLineup:lineup, toggle:!this.state.toggle})
        const modal = document.getElementById(`lineup_${e.target.dataset.id}`);
        modal.classList.toggle("show-modal");
    }

    handleInput = (e) => {
        this.setState({textContent: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({comments:[...this.state.comments, this.state.textContent]})
        const reqObj = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({
                content:this.state,
                lineup: this.props.lineup,
                user: this.props.user
            })
        }
        fetch("http://localhost:3000/comments", reqObj)
        .then(res=>res.json())
        .then(data=>{
            this.setState({textContent:""})
        })
    }

    render() {
        return(
            <div>
                <SmallField toggleModal={this.toggleModal} findPlayer={this.findPlayer} lineup={this.props.lineup} user={this.props.user}/>
                <EditLineupModal toggleModal={this.toggleModal} lineup={this.props.lineup}/>
                <FieldComments textContent={this.state.textContent} handleInput={this.handleInput} handleSubmit={this.handleSubmit} comments={this.state.comments} user={this.props.user} lineup={this.props.lineup}/>
                <FieldLikes likes={this.state.likes} lineup={this.props.lineup} likeLineup={this.likeLineup} />
            </div>
        )
}}
export default SmallFieldCard