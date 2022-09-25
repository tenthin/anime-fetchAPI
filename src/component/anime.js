import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      <div className="container my-3">
        <div className="row">
          <div className="col-4">
          <button onClick={fetchAnime} className="btn btn-primary">Fetch Anime</button>
          </div>
        </div>
      </div>

    <div className="container my-3">
      <div className="row">
        {
          anime.map((value) => {
            return(
              <div className="col-4">
                <div className="card" style={{width:"18rem"}}>
                  <img src={value.images.jpg.image_url} alt="anime"/>
                  <div className="card-body">  
                    <h5 className="title">{value.title}</h5>
                    <p className="synopsis">{value.synopsis}</p>
                    <button><a href={value.url} className="url">Click</a></button>
                  </div>
                </div>
              </div>
            )
          })
          }
      </div>
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