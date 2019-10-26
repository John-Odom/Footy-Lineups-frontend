import React from 'react'
import {Link } from 'react-router-dom'

const LoginPage = () => {
    return(
        <div>
            <em>Don't have an account? <Link to="/signup"> Signup</Link> </em>
        </div>
    )
}

export default LoginPage