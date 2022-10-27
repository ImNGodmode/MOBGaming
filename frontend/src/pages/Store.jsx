import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import GamesList from '../components/GamesList';
import Search from '../components/Search';
import Detail from '../components/Detail';

const apiKey = process.env.REACT_APP_API_KEY

function Store() {
console.log(apiKey)
  const [games, setGames] = useState([])
  const [foundGame, setFoundGame] = useState(null)
  
  
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

 

  useEffect(() => {
    getGame()
  },[])

 

  return (
  <>
    <div>Store</div>
    <Search searchGame={searchGame} foundGame={foundGame} />
    
    {foundGame ? (

      <Detail foundGame={foundGame}/>
    ) : (
      <GamesList games = {games}/>
    )}
        
  </>
      
    )
}

export default Store