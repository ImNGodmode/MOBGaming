import React from 'react'


 function Detail({foundGame, rFoundGame, addToCart}) {

  return (
    <>
    <h1> Title: {foundGame.name}</h1>
    <input type="submit" value="add to cart" onClick={() => addToCart(foundGame)} /><br/>
    <img src={foundGame.background_image_additional} alt={foundGame.backgrould_image} />
    <p>{foundGame.description_raw}</p>
    Release date: {foundGame.released}
    <div onClick={rFoundGame}>Back to List</div>
    </>
  )
}

export default Detail