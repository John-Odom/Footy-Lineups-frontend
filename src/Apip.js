import React from 'react'
import App from './App'

class Apip extends React.Component{

    state ={
        assigned:true
    }

    handleLogout = () => {
        this.setState({state:this})
    }

    render() {    
        return(
            <div>
                <App handleLogout={}/>
            </div>
        )
    }
}
export default Apip