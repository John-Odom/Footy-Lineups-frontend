import React from 'react'
import { Button, Icon, Modal, Image, Header, Card } from 'semantic-ui-react'
import ProfilePicture from "../containers/ProfilePicture"



const ModalExampleMultiple = (props) => (
    <Modal  trigger={<Button>Edit Personal Information</Button>}>
     <Modal.Header>Edit Profile</Modal.Header>
     <Modal.Content image>
       <Image wrapped size='medium' src={props.user.avatar}/>
       <Modal.Description>
         <Header><a>Profile Information</a></Header>
         Name: <input type="text" value={props.username} name="username" onChange={(e) => props.handleChange(e)}/>
         <br /><br />
         About Me: <textarea value={props.bio} name="bio" onChange={(e) => props.handleChange(e)}/>
         <br /><br />
         Favorite Team: 
         <select name="team" onChange={(e) => props.handleChange(e)}>
            <option value={props.team}>{props.team}</option>
             {props.teamsList.map(team => {
                return team.club_name !== props.team ? 
                <option value={team.club_name}>{team.club_name}</option> 
                : null
            })}
        </select> 
        <br /><br />
        Profile Image Source: <input type="text" value={props.avatar} name="avatar" onChange={(e) => props.handleChange(e)}/>
        <br /><br />
        <button onClick={props.handleSubmit} className="ui button">Update Information</button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalExampleMultiple
