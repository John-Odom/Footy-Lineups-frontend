import React from 'react'

class FieldComments extends React.Component {
    render(){
        return(
            <div className="new-comment">
                <form onSubmit={(e)=>this.props.handleSubmit(e)}>
                    <textarea onChange={(e)=>this.props.handleInput(e)} value={this.props.textContent}></textarea>
                    <input className="comment-submit" type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}
export default FieldComments