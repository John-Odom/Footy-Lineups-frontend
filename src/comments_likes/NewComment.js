import React from 'react'

class FieldComments extends React.Component {
    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.props.handleSubmit(e)}>
                    <textarea onChange={(e)=>this.props.handleInput(e)} value={this.props.textContent}></textarea>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
export default FieldComments