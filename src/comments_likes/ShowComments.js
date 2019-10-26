import React from 'react'

const FieldComments =(props) => {
    return(
        <div className="comments">
            {props.comments.map(comment => {
                return comment.user ?  
                <div>{comment.user.username} => {comment.content}</div> : 
                <div>{props.user.username} => {comment}</div>
            })}
        </div>
    )
}
export default FieldComments