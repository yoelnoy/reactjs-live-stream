import React, { useEffect, useState } from 'react'
import './HomeScreen.css'
import ClipLoader from "react-spinners/ClipLoader";
import Nav from '../../nav/Nav'
import Banner from '../../banner/Banner'
import Row from '../../row/Row'
import Loader from 'react-spinners/ClipLoader';

export default function HomeScreen() {

  const [bannerdata, setBannerData] = useState(false);
  const [rowdata, setRowData] = useState(false);
  const [loader, setLoader] = useState(true);

  console.log(bannerdata);

  useEffect(() => {
    if(bannerdata && rowdata !== false){
      setLoader(false)
    }
  })

  console.log(bannerdata);

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
        {loader ? (
          <div className="planScreen__loader">
            <ClipLoader color="red" loading={loader}  size={150}/>
          </div>
        ) : (
          null
        )}
        <Banner setBannerData={setBannerData} loader={loader} />
        <Row title="Netflix Originals" isLargeRow request={originals} setRowData={setRowData} loader={loader}/>
        <Row title="Trending Now" request={trending} setRowData={setRowData} loader={loader}/>
        <Row title="Top Rated" request={top_rated} setRowData={setRowData} loader={loader}/>
        <Row title="Action Movies" request={actionM} setRowData={setRowData} loader={loader}/>
        <Row title="Comedy Movies" request={comedyM} setRowData={setRowData} loader={loader}/>
        <Row title="Horror Movies" request={horrorM} setRowData={setRowData} loader={loader}/>
        <Row title="Romantic Movies" request={romanceM} setRowData={setRowData} loader={loader}/>
        <Row title="Documentaries" request={documentariesM} setRowData={setRowData} loader={loader}/>
      </div>
    </div>
  )
}
