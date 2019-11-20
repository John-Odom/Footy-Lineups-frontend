import React from 'react'
import LoginForm from '../forms_buttons/LoginForm'
import SignupPathButton from '../forms_buttons/SignupPathButton'
import Logo from '../containers/Logo'
import '../styles/LoginPage.css'

class LoginPage extends React.Component {

    render(){
        return(
            <div id="login-page">
                <div id="login-area">
                <Logo />
                <LoginForm handleLogout={this.props.handleLogout}/>
                <SignupPathButton />
                </div>
            </div>
        )
    }
}

export default LoginPage