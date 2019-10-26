import React from 'react'
import NewComment from '../comments_likes/NewComment'
import ShowComments from '../comments_likes/ShowComments'
import SemanticNewLike from '../comments_likes/SemanticLikeCard'

const FieldComments = (props) => {
        return(
            <div>
                <div className="comments-likes">
                <NewComment textContent={props.textContent} handleInput={props.handleInput} handleSubmit={props.handleSubmit} user={props.user} lineup={props.lineup} />
                <SemanticNewLike liked={props.liked} likes={props.likes} lineup={props.lineup} handleLike={props.handleLike} />
                </div>
                <ShowComments user={props.user} comments={props.comments} />
            </div>
        )
    }
export default FieldComments