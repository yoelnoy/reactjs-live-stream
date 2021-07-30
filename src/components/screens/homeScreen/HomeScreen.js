import React from 'react'
import './HomeScreen.css'
import Nav from '../../nav/Nav'
import Banner from '../../banner/Banner'
import Row from '../../row/Row'

export default function HomeScreen() {

  const trending = "https://api.themoviedb.org/3/trending/all/week?api_key=a59e3780f10803b45edc5b425207702a&language=en-US"
  const originals = "https://api.themoviedb.org/3/discover/tv?api_key=a59e3780f10803b45edc5b425207702a&with_network=213"
  const top_rated = "https://api.themoviedb.org/3/movie/top_rated?api_key=a59e3780f10803b45edc5b425207702a&language=en-US"
  const actionM = "https://api.themoviedb.org/3/discover/movie?api_key=a59e3780f10803b45edc5b425207702a&with_genre=28"
  const comedyM = "https://api.themoviedb.org/3/discover/movie?api_key=a59e3780f10803b45edc5b425207702a&with_genre=35"
  const horrorM = "https://api.themoviedb.org/3/discover/movie?api_key=a59e3780f10803b45edc5b425207702a&with_genre=27"
  const romanceM = "https://api.themoviedb.org/3/discover/movie?api_key=a59e3780f10803b45edc5b425207702a&with_genre=10749"
  const documentariesM = "https://api.themoviedb.org/3/discover/movie?api_key=a59e3780f10803b45edc5b425207702a&with_genre=99"
  return (
    <div>
      <div className="HomeScreen">
        <Nav />
        <Banner />
        <Row title="Netflix Originals" isLargeRow request={originals} />
        <Row title="Trending Now" request={trending}/>
        <Row title="Top Rated" request={top_rated}/>
        <Row title="Action Movies" request={actionM} />
        <Row title="Comedy Movies" request={comedyM} />
        <Row title="Horror Movies" request={horrorM} />
        <Row title="Romantic Movies" request={romanceM} />
        <Row title="Documentaries" request={documentariesM} />
      </div>
    </div>
  )
}
