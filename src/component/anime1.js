import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Anime1() {
    const [anime,setAnime] = useState("")

    const getAnime = () => {
        axios.get("https://api.jikan.moe/v4/anime")
        .then((response) => {
            setAnime(response.data.data[0].images.jpg.image_url);
            console.log(response.data.data[0].title);
        })
    }
  return (
    <div> fetch
        <button onClick={getAnime}>
            hell
            {anime}
        </button>
    </div>
  )
}

export default Anime1