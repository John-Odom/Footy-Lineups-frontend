import React from 'react'
import LoginForm from '../forms_buttons/LoginForm'
import LoginPathButton from '../forms_buttons/SignupPathButton'
import LineupCreatorTitle from '../components/LineupCreatorTitle'
import PreAuthNavBar from '../navBars/PreAuthNavBar'
import {Route} from 'react-router-dom'


const SignupPage = () => {
    return(
        <div>
            <Route component={PreAuthNavBar} />
            <LineupCreatorTitle />
            <LoginForm />
            <LoginPathButton />
        </div>
    )
}

export default SignupPage