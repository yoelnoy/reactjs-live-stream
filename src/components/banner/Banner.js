import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from 'axios';

export default function Banner({ setBannerData, loader }) {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a59e3780f10803b45edc5b425207702a&language=en-US&page=1").then(res => {
      setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
        setBannerData(true)
    })
  }, [])

  // Limit number of letters in description
  function truncate(string, n) {
    return string.length > n ? string.substr(0, n-1) + "..." : string;
  }

  return (
    <div>
      {loader ? (
        <div></div>
      ) : (
        <header className="banner" style={{backgroundPosition:"inherit center", backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
        <div className="banner__content">
          <div className="banner__inner-content">
            <h1 className="banner__title">{movie.title}</h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__desc">
              {truncate(`"${movie.overview}"`, 150)}
            </h1>
          </div>
        </div>
      
        <div className="banner--fadeButton" />
      </header>
      )}
      
    </div>
  )
}
