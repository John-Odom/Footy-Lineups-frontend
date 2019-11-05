import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Navigation.css'
import ProfilePicture from '../containers/ProfilePicture'

export default class Navigation extends React.Component {
  
  
  logout = () => {
    localStorage.clear()
}
  
  render() {
    return (
      <div id="navigation">
        <ProfilePicture avatar={this.props.avatar}/>
        <div id="nav-bar-links">
          <Link className="link" to="/home"><div className="nav-bar-link">Home</div></Link>
          <Link className="link" to="/create"><div className="nav-bar-link">Create</div></Link>
          <Link className="link" to="/profile"><div className="nav-bar-link">Profile</div></Link>
          <Link className="link" to="/add"><div className="nav-bar-link">Search</div></Link>
          <Link className="link" onClick={()=> this.logout()} to="/login"><div className="nav-bar-link">Logout</div></Link>
        </div>
    </div>
    );
  }
}