import React from 'react'

function Detail(props) {
  return (
    <>
    <h1> Title: {props.foundGame.name}</h1>
    <img src={props.foundGame.background_image_additional} />
    <p>{props.foundGame.description_raw}</p>
    Release date: {props.foundGame.released}
       
    </>
  )
}

export default Detail