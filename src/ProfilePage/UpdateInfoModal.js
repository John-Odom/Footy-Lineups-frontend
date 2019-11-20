import React from 'react'
import { Button, Icon, Modal, Image, Header, Card } from 'semantic-ui-react'
import ProfilePicture from "../containers/ProfilePicture"



class ModalExampleMultiple extends React.Component {

render() {
  console.log('modal props',this.props)
  if(this.props.team) {
  return (
    <Modal  trigger={<Button>Edit Personal Information</Button>}>
     <Modal.Header>Edit Profile</Modal.Header>
     <Modal.Content image>
       <Image wrapped size='medium' src={this.props.user.avatar}/>
       <Modal.Description>
         <Header><a>Profile Information</a></Header>
         Name: <input type="text" value={this.props.username} name="username" onChange={(e) => this.props.handleChange(e)}/>
         <br /><br />
         About Me: <textarea value={this.props.bio} name="bio" onChange={(e) => this.props.handleChange(e)}/>
         <br /><br />
         Favorite Team: 
         <select name="team" onChange={(e) => this.props.handleChange(e)}>
            <option value={this.props.team.club_name}>{this.props.team.club_name}</option>
             {this.props.teamsList.map(team => {
                return team.club_name !== this.props.team ? 
                <option value={team.club_name}>{team.club_name}</option> 
                : null
            })}
        </select> 
        <br /><br />
        Profile Image Source: <input type="text" value={this.props.avatar} name="avatar" onChange={(e) => this.props.handleChange(e)}/>
        <br /><br />
        <button onClick={this.props.handleSubmit} className="ui button">Update Information</button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)}
else {
  return null
} } }

export default ModalExampleMultiple
