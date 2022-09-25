import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';

function FetchAnime() {

  const[anime,setAnime]=useState([])

  const fetchAnime =() => {
    axios.get("https://api.jikan.moe/v4/anime")
    .then((response)=> {
      console.log(response);
      setAnime(response.data.data)
    })
  }
  return(
    <div>

    <button onClick={fetchAnime}>Fetch Anime</button>
    <div>
    {
        anime.map((value) => {
          return(
            <div>
              <img src={value.images.jpg.image_url} alt="anime"/>
            <h5 className="title">{value.title}</h5>
            <p className="synopsis">{value.synopsis}</p>
            <button><a href={value.url} className="url">Click</a></button>
            </div>
          )
        })
      }
    </div>
   
    </div>
  )
}

export default FetchAnime






// function Anime() {
//     const [anime,setAnime] = useState([]);

//   const animeGet = () => {
//     fetch("https://api.jikan.moe/v4/anime")
//       .then((response) => response.json())
//       .then((json)=> {
//         console.log(json.data);
//         setAnime(json.data);
//     })
//   };

//   // useEffect(() => {
//   //   animeGet();
//   // })
//   return (
//     <div>anime
//         <button onClick={animeGet}>Fetch APi</button>
//         <br />
//         {/* <pre>{JSON.stringify(anime,null,2)}</pre> */}
//         <div>
//           {
//             anime?.length ? anime.map(
//             items => 
//               <div>
//                 <img src={items.images.jpg.image_url} alt="anime" /><br />
//                 {items.title}<br/>
//                 {items.url}
//               </div>
//               ):
//               <div/>
//           }
//         </div>
//     </div>
//   )
// }

// export default Anime