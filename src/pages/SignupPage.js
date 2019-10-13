import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginPathButton from '../components/LoginPathButton'
import LineupCreatorTitle from '../components/LineupCreatorTitle'

const SignupPage = () => {
    return(
        <div>
            <LineupCreatorTitle />
            <SignupForm />
            <LoginPathButton />
        </div>
    )
}

export default SignupPage