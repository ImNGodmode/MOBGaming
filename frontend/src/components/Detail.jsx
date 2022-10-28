import React from "react";

function Detail(props) {
  const rFoundGame = () => {
    props.setFoundGame(null);
  };
  return (
    <>
      <h1 className="game-title"> {props.foundGame.name}</h1>

      <img src={props.foundGame.background_image_additional} />
      <input
        className="btn btn-primary game-button buy-btn"
        type="submit"
        value="add to cart"
        onClick={() => props.addToCart(props.foundGame)}
      />
      <br />
      <p className="release-date">Release date: {props.foundGame.released}</p>
      <p className="game-desc">{props.foundGame.description_raw}</p>
      <div className="btn game-back" onClick={rFoundGame}>Back to List</div>
    </>
  );
}

export default Detail;
