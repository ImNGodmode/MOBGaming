import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import GamesList from '../components/GamesList';
// import Search from '../components/Search';
import Detail from '../components/Detail';

const apiKey = process.env.REACT_APP_API_KEY


function Store({foundGame, setFoundGame, cart, setCart}) {

  const [games, setGames] = useState([])
  
  
  const getGame = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      // console.log(data.results)
      const gamesList = data.results
      console.log(gamesList)
      setGames(gamesList);
    } catch (e) {
      console.error(e)
    }
  };
  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
 

  useEffect(() => {
    getGame()
  },[])

 

  return (
  <>
   
    {foundGame ? (

      <Detail foundGame={foundGame} setFoundGame={setFoundGame} addToCart={addToCart}/>
    ) : (
      <GamesList games={games} addToCart={addToCart} cart={cart} setCart={setCart}/>
    )}
    
  </>
      
    )
}

export default Store