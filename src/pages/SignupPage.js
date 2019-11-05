import React from 'react'
import SignupForm from '../forms_buttons/SignupForm'
import LoginPathButton from '../forms_buttons/LoginPathButton'
import LineupCreatorTitle from '../components/LineupCreatorTitle'
import Logo from '../containers/Logo'
import '../styles/SignupPage.css'

const SignupPage = (props) => {
    return(
        <div id="signup-page">
            <div id="signup-area">
                <Logo />
                <div id="signup-indicator">Sign Up</div>
                <SignupForm />
                <LoginPathButton />
            </div>
        </div>
    )
}

export default SignupPage