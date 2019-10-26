import React from 'react'
import SmallField from '../components/SmallField'
import FieldComments from '../components/FieldComments'
import EditLineupModal from '../forms_buttons/EditLineupModal'
import SmallFieldDescripts from '../components/SmallFieldDescripts.js'
import SemanticNewLike from '../comments_likes/SemanticLikeCard'


class SmallFieldCard extends React.Component {

    state={
        lineupToEdit:null,
        likes:0,
        comments:[],
        textContent:"",
        liked:false,        
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
        const alreadyLiked = this.props.lineup.likes.find( like =>{
            return like.user_id==this.props.user.id
        })
        this.props.lineup.lineup_players.map(playerObj => {
            this.setState({[playerObj.position]: playerObj.player_name})
        })
        this.setState({
            likes:this.props.lineup.likes.length,
            comments: this.props.lineup.comments,
            liked: (alreadyLiked ? true : false)
        })
        fetch(`http://localhost:3000/teams/${this.props.lineup.team_id}`)
        .then(res=>res.json())
        .then(data => {
          this.setState({playersOnTeam: data.players})
      })
    }

    dropdownSelects = () => {
        return (this.state.playersOnTeam.map( (player) => {
          return <option key={player.id} value={player.name}> {player.name} ({player.position})</option>
        }))
      }
    
      updatePlayer = (e) => {
        const position = e.target.id.slice(6)
        this.setState({[position]: e.target.value})
      }
    
      submitEdit = (e) =>{
        this.toggleModal(e)
        const reqObj = {
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    data:this.state
                  })
            }
        fetch(`http://localhost:3000/lineups/${e.target.dataset.id}`, reqObj)
        .then(res=>res.json())
        .then(data=>{
        })
      }    

    findPlayer = (position) => {
        return this.props.lineup.lineup_players.find(lineupPlayerObj => lineupPlayerObj["position"]==position)["player_name"]
    }

    unlikeLineup = () => {
        this.setState({likes:this.state.likes-1,liked:false})
        const foundLike =this.props.lineup.likes.find(like => {
             return like.user_id==this.props.user.id
         })
        fetch(`http://localhost:3000/likes/${foundLike.id}`, {method:"DELETE"})
        .then(res=>res.json())
        .then(data=> {
            this.props.resetLineups()
        })
    }

    likeLineup = () => {
        this.setState({likes:this.state.likes+1, liked:true})
        const reqObj = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({
                lineup: this.props.lineup,
                user: this.props.user
            })
        }
        fetch("http://localhost:3000/likes", reqObj)
        .then(res=>res.json())
        .then(data=> {
            this.props.resetLineups()
        })
    }

    handleLike = (likes) => {
        if(this.state.liked){
           this.unlikeLineup(likes)
        } 
        else {
            this.likeLineup()
        }
    }

    toggleModal = (e, lineup=[]) => {
        this.setState({lineupToEdit:lineup, toggle:!this.state.toggle})
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
            <div className="small-field-card">
                <SmallFieldDescripts lineup={this.props.lineup}/>
                <SmallField 
                toggleModal={this.toggleModal} 
                findPlayer={this.findPlayer} 
                lineup={this.props.lineup} 
                user={this.props.user}
                goalkeeper= {this.state.goalkeeper}
                lb= {this.state.lb}
                lcb= {this.state.lcb}
                rcb= {this.state.rcb}
                rb= {this.state.rb}
                cdm= {this.state.cdm}
                lcam= {this.state.lcam}
                rcam= {this.state.rcam}
                lw= {this.state.lw}
                striker= {this.state.striker}
                rw= {this.state.rw}
                />

                <EditLineupModal 
                    updatePlayer={this.updatePlayer} 
                    submitEdit={this.submitEdit} 
                    dropdownSelects={this.dropdownSelects}
                    toggleModal={this.toggleModal} 
                    lineup={this.props.lineup} 
                    goalkeeper= {this.state.goalkeeper}
                    lb= {this.state.lb}
                    lcb= {this.state.lcb}
                    rcb= {this.state.rcb}
                    rb= {this.state.rb}
                    cdm= {this.state.cdm}
                    lcam= {this.state.lcam}
                    rcam= {this.state.rcam}
                    lw= {this.state.lw}
                    striker= {this.state.striker}
                    rw= {this.state.rw}
                />
                <FieldComments textContent={this.state.textContent} handleInput={this.handleInput} handleSubmit={this.handleSubmit} comments={this.state.comments} user={this.props.user} lineup={this.props.lineup} liked={this.state.liked} likes={this.state.likes} lineup={this.props.lineup} handleLike={this.handleLike}/>
            </div>
        )
}}
export default SmallFieldCard