import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from 'axios'

export default function Row({ title, request,  isLargeRow = false }) {

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios.get(request).then(res => {

      let unshuffled = res.data.results

      let shuffled = unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

      setMovies(shuffled)
      /* console.log(title);
      console.log(res.data.results); */
    })
  }, [])
  /* useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=a59e3780f10803b45edc5b425207702a&language=en-US").then(rest => {
      console.log("sss " + rest)
    })
  }, []) */
console.log(movies);
  return (
    <div className="row">
      <h2 className="row__title" style={{ color: "white"}}>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => {
          return(
            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ?  movie.poster_path : movie.backdrop_path}`} alt="" />
          )
        })}
      </div>
    </div>
  )
}
