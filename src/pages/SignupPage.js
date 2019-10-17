import React from 'react'
import SignupForm from '../forms_buttons/SignupForm'
import LoginPathButton from '../forms_buttons/LoginPathButton'
import LineupCreatorTitle from '../components/LineupCreatorTitle'
import PreAuthNavBar from '../navBars/PreAuthNavBar'
import {Route} from 'react-router-dom'

const SignupPage = (props) => {
    console.log(props.user)
    return(
        <div>
            <Route component={PreAuthNavBar} />
            <LineupCreatorTitle />
            <SignupForm />
            <LoginPathButton />
        </div>
    )
}

export default SignupPage