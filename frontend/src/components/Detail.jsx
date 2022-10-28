import React from 'react'


function Detail(props) {
  const rFoundGame = () => {
   props.setFoundGame(null)
  }
  return (
    <>
    <h1> Title: {props.foundGame.name}</h1>
    <input type="submit" value="add to cart" onClick={() => props.addToCart(props.foundGame)} /><br/>
    <img src={props.foundGame.background_image_additional} />
    <p>{props.foundGame.description_raw}</p>
    Release date: {props.foundGame.released}
    <div onClick={rFoundGame}>Back to List</div>
    </>
  )
}

export default Detail