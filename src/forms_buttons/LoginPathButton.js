import React from 'react'
import {Link } from 'react-router-dom'

const LoginPathButton = () => {
    return(
        <div>
            <em>Already have an account? <Link to="/login">Login</Link></em>
            
        </div>
    )
}

export default LoginPathButton