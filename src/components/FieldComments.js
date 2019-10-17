import React from 'react'
import NewComment from '../comments_likes/NewComment'
import ShowComments from '../comments_likes/ShowComments'


const FieldComments = (props) => {
        return(
            <div>
                <NewComment textContent={props.textContent} handleInput={props.handleInput} handleSubmit={props.handleSubmit} user={props.user} lineup={props.lineup} />
                <ShowComments user={props.user} comments={props.comments} />
            </div>
        )
    }
export default FieldComments