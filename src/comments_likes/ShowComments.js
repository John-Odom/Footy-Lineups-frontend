import React from 'react'

const FieldComments =(props) => {
    return(
        <div>
            {props.comments.map(comment => {
                return comment.user ?  
                <p>{comment.user.username} => {comment.content}</p> : 
                <p>{props.user.username} => {comment}</p>
            })}        
        </div>
    )
}
export default FieldComments