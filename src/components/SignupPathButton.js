import React from 'react'
import {Link } from 'react-router-dom'

const LoginPage = () => {
    return(
        <div>
            <h3>Don't have an account?</h3>
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default LoginPage