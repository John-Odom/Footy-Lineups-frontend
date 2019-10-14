import React from 'react'
import {Link } from 'react-router-dom'

const LoginPathButton = () => {
    return(
        <div>
            <h3>Already have an account?</h3>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default LoginPathButton