import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { APIkey } from "./utils";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Paginations from "./components/Paginations";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [videoList, setVideoList] = useState([]);
  const [mode, setMode] = useState('');
  const [query, setQuery] = useState('');
  // Fetch API & get data
  async function getData(mode) {
    const apiKey = APIkey;

    const urlList = {
      'trending': `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${currentPageNumber}`,
      'toprated': `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPageNumber}`,
      'upcoming': `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${currentPageNumber}`,
      'nowplaying': `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPageNumber}`,
    };

    let url = null;

    if (mode === '' || mode === 'trending') url = urlList.trending;
    else url = urlList[mode];

    const response = await fetch(url);
    const data = await response.json();

    console.log("mode: ", mode," data ", data.results);

    if (currentPageNumber === 1) {
      setMovies(data.results);
      setFilteredMovies(data.results);
    } else {
      setMovies(movies.concat(data.results));
      setFilteredMovies(movies);
    };
    setCurrentPageNumber(currentPageNumber + 1);
  }

  //Get Videos
  async function getVideos(videoID) {
    const apiKey = APIkey;
    const url = `https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=${apiKey}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    setVideoList(data.results);
  }

  function searchMovies(keywords) {
    if (keywords.length > 0) {
      let searchedMovies = [];
      if (movies.length > 0) {
        searchedMovies = movies.filter(movie => {
          if (movie.title) {
            if(movie.title.toLowerCase().includes(keywords.toLowerCase())) {
              console.log('title matched')
              return true}
          }
          if (movie.overview) {
            if (movie.overview.toLowerCase().includes(keywords.toLowerCase())) {
              console.log('overview matched')
              return true}
          }
          return false;
        }
      )};
      console.log(keywords, query, searchedMovies)
      searchedMovies.length > 0 ? setFilteredMovies(searchedMovies) : setFilteredMovies(movies);
    } else setFilteredMovies(movies)
  }

  useEffect(() => {
    getData(mode);
  }, [mode]);

  useEffect(() => {
    searchMovies(query);
  }, [query]);

  if (movies.length <= 0) return <div>LOADING...</div>;
  return (
    <div className="App">
      <Navbar
      setMode={setMode}
      setCurrentPageNumber={setCurrentPageNumber}
      setQuery={setQuery}
      searchMovies={searchMovies}
      query={query}
      />

      <div className="row container justify-content-center mb-1">
        <Carousel movies={movies} />

        <div className="col-4 rightSideCarousel">
          <img
            src="https://i.dailymail.co.uk/1s/2019/08/05/17/16915676-0-image-a-1_1565020944826.jpg"
            alt="righSideCarousel"
          />
        </div>
      </div>

      <div className="row container section">
        <Sidebar className=""
          movies={movies}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
          setMode={setMode}
          setCurrentPageNumber={setCurrentPageNumber}
        />

        <div className="col p-0 h-100 mainContent d-flex flex-column align-items-center">
          <h2>TRENDING</h2>
          <Main
            onMovies={filteredMovies}
            getData={getData}
            getVideos={getVideos}
            videoList={videoList}
            mode={mode}
          />
          <Paginations
            currentPageNumber={currentPageNumber}
            setCurrentPageNumber={setCurrentPageNumber}
          />
        </div>

      </div>
      <footer></footer>
    </div>
  );
}

export default App;
