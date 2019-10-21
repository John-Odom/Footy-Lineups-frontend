// import React from 'react'
// import SmallField from '../components/SmallField'
// import EditLineupModal from '../forms_buttons/EditLineupModal'
// import '../styles/EditLineupModal.css'


// class ProfileFieldContainer extends React.Component {

// state={
//     user:null,
//     lineups:null,
//     currentLineup:null
// }

// componentDidMount = () => {
  
//     fetch("http://localhost:3000/profile", {
//       headers: {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json",
//         "Authorization": localStorage.getItem("jwt")
//       }
//     })
//     .then(res => res.json())
//     .then(data => {
//         this.setState({user:data.user})
//     }
//         )
//     this.setState({user:this.props.user})
//       fetch("http://localhost:3000/lineups", {
//       headers: {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json"
//       }
//     })
//     .then(res => res.json())
//     .then(lineups => {
//         this.setState({currentLineup:lineups.find( lineup => {
//           return lineup.user_id == this.state.user.id
//       })})
//       })
// }
// toggleModal = (e, lineup) => {
//   this.setState({currentLineup:lineup, toggle:!this.state.toggle})
//   const modal = document.getElementById(`lineup_${e.target.dataset.id}`);
//   modal.classList.toggle("show-modal");
// }

//   render() {
//     console.log("props_to_profile",this.props.user)
//     console.log("state.user",this.state.user)
//       return(
//           <div>
//               <p>{this.state.user ? this.state.user.username : "Username should be here"}</p>
//               <p>{this.state.user ? this.state.user.bio : "bio goes here"}</p>
//               <p>{this.state.user ? this.state.user.team : "team goes here"}</p>
//               <div className="profile-field-container">
//                 {this.state.lineups ? this.state.lineups.map(lineup => {
//                     return (
//                       <div>
//                         <SmallField toggleModal={this.toggleModal} lineup={lineup} user={this.state.user}/>,
//                         <EditLineupModal toggleModal={this.toggleModal} lineup={lineup} />
//                       </div>
//                       )
//                 }) : null }
//               </div>
              
//           </div>
//       )
//   }

// }

// export default ProfileFieldContainer