import React from 'react'
import LoginForm from '../components/LoginForm'
import LoginPathButton from '../components/SignupPathButton'
import LineupCreatorTitle from '../components/LineupCreatorTitle'

const SignupPage = () => {
    return(
        <div>
            <LineupCreatorTitle />
            <LoginForm />
            <LoginPathButton />
        </div>
    )
}

export default SignupPage