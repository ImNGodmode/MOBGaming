import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import GamesList from '../components/GamesList';
import Search from '../components/Search';
import Detail from '../components/Detail';
import Cart from '../components/Cart'
const apiKey = process.env.REACT_APP_API_KEY

function Store() {

  const [games, setGames] = useState([])
  const [foundGame, setFoundGame] = useState(null)
  const [cart, setCart] = useState([]);
  
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

  const searchGame = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${searchTerm}?key=${apiKey}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      // console.log(data.results)
      // const game = data
       console.log(data)
      setFoundGame(data);
      
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
    <div>Store</div>
    <Search searchGame={searchGame} foundGame={foundGame} addToCart={addToCart} cart={cart} setCart={setCart}/>
    <Cart cart={cart} setCart={setCart} />
    {foundGame ? (

      <Detail foundGame={foundGame} setFoundGame={setFoundGame}/>
    ) : (
      <GamesList games={games} searchGame={searchGame} addToCart={addToCart} cart={cart} setCart={setCart}/>
    )}
    
  </>
      
    )
}

export default Store