// import { useState } from 'react'

// function Search(props) {
    
//     const [formData, setFormData] = useState({
//         searchTerm: ""
//       });
    
//         //handleChange - updates formData when we type into form
//         const handleChange = (event) => {
//           //use the event object to detect key and value to update
//           setFormData({ ...formData, [event.target.name]: event.target.value });
//           };
      
//           const handleSubmit = (event) => {
              
//           let slug = formData.searchTerm.split(' ').join('-').toLowerCase()
//           //console.log(slug)
//           //prevent page from refreshing on form submission
//           event.preventDefault();
          
//           props.searchGame(slug);
//           };


//           const loaded =() => {
//             return (
//                 <>
//                     Name:<a href='#'>{props.foundGame.name}</a> <br/>
//                     <img src={props.foundGame.background_image} alt={props.foundGame.name}/><br/>
//                     Rating: {props.foundGame.rating} <br/>
//                     Meta Critic:{props.foundGame.metacritic} <br/>
//                     Price: $60 <br/>
//                 </>
//             )
//             }
        
//             const loading =()=> {
//               return "Game not available"
//           }

//   return (
//      <>
     
//      <form onSubmit={handleSubmit}>
//         <input type='text' name='searchTerm' onChange={handleChange} value={formData.searchTerm} required/>
//         <input type='submit' value='submit' />

//     </form>
//     {props.foundGame ? loaded() : loading()}
     
//      </>

//   )}
// export default Search
import { useState } from 'react'
function Search(props) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    });
    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        let slug = formData.searchTerm.split(' ').join('-').toLowerCase()
        //console.log(slug)
        event.preventDefault();
        props.searchGame(slug);
    };

    const loaded = () => {
        return (
            <div className='card mt-4'>
                {console.log(props.foundGame)}
                <a href='#'>{props.foundGame.name}</a> <br />
                <img src={props.foundGame.background_image} alt={props.foundGame.name} /><br />
                Rating: {props.foundGame.rating} <br />
                Meta Critic:{props.foundGame.metacritic} <br />
                Price: $60 <br />
                <div>Buy Now!</div> 
            </div>
        )
    }
    const loading = () => {
        return "Game not available"
    }
    return (
        <>
            <div className='d-flex justify-content-left ms-5'>
                <form onSubmit={handleSubmit}>
                    <input className='form-control mb-3 search-input' type='text' name='searchTerm' onChange={handleChange} value={formData.searchTerm} required />
                    <input className='btn btn-primary' type='submit' value='submit' />
                </form>
                <br />
            </div>
            <div className='d-flex justify-content-center'>
                {props.foundGame ? loaded() : loading()}
            </div>
        </>
    )
}
export default Search