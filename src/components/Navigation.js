import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        {!!localStorage.jwt ? <Link to="/profile">Profile</Link> : null}
        {/* <Link to={() => {
          localStorage.clear()
          return "/"
        }}>Logout</Link> */}
      </div>
    );
  }
}