// import React from 'react'

// function GamesList({games}) {
    
//   return (
//     <>
//             <div>GamesList</div>
//             <ul>
//             {games.map((game, i) => {
//                 return (
//                 <li key={i}>
//                     Name: <a href='#'>{game.name}</a>
//                     <img src={`${game.background_image}`} alt={game.name}/> <br/>
//                     Rating: {game.rating} <br/>
//                     Meta Critic:{game.metacritic} <br/>
//                     Price: $60 <br/>
//                 </li>
//                 )
//             })
//         }
//     </ul>
//   </>
//   )
// }
  

// export default GamesList
import React from 'react'
function GamesList({ games }) {
    let gamesData = games.map((game, i) => (
        <div className='d-flex flex-wrap justify-content-center mt-5 card mx-3 ' key={i}>
            <a href='#' className='d-flex justify-content-center' >{game.name}</a>
            <img src={`${game.background_image}`} alt={game.name} /> <br />
            Rating: {game.rating} <br />
            Meta Critic:{game.metacritic} <br />
            Price: $60 <br />
        </div>

    ))
    return (
        <>
            <h4 className='d-flex justify-content-center mt-5'> Available Games</h4>
            <div className='d-flex flex-wrap justify-content-center' >
                {gamesData}
            </div>
        </>
    )
}
export default GamesList