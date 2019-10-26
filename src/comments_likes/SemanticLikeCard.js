import React from 'react'
import { Button } from 'semantic-ui-react'

const SemanticLikeCard = (props) => {
  return (
  <div className="like-button-container">
    <Button
      className="like-button"
      onClick={()=>props.handleLike()}
      color={props.liked ? 'red' : "blue"}
      content={props.liked ? 'Liked' : "Like"}
      icon='heart'
      label={{ 
          basic: true, 
          color: props.liked ? 'red' : "blue",
          pointing: 'left',
          content: props.likes }}
    />
  </div>)
}

export default SemanticLikeCard