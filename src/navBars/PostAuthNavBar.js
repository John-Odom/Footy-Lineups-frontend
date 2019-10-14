import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/create">Create Lineup</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}