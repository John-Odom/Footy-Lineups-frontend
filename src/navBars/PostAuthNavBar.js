import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'
import ProfilePicture from '../containers/ProfilePicture'

export default class Navigation extends React.Component {
  
  logout = () => {
    localStorage.clear()
    fetch("http://localhost:3000/profile", {method:"DELETE"})
    .then(res => res.json())
    .then(data => {
      console.log(data)
  })
}
  
  render() {
    return (
      <div className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/create">Create Lineup</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/add">Search Users</Link>
        <Link onClick={()=> this.logout()} to="/login">Logout</Link>
      </div>
    );
  }
}