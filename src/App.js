import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { APIkey, urlHomePage } from "./utils";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Paginations from "./components/Paginations";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(null);
  const [videoKey, setVideoKey] = useState('');
  const [mode, setMode] = useState('');
  const [query, setQuery] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'black',
      opacity: '0.8'
    }
  };


  // Fetch API & get data
  async function getData(mode, myPage) {
    const apiKey = APIkey;

    const urlList = {
      'trending': `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${myPage}`,
      'toprated': `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${myPage}`,
      'upcoming': `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${myPage}`,
      'nowplaying': `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${myPage}`,
      'tvpopular': `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${myPage}`
    };

    let url = null;

    if (mode === '' || mode === 'trending') url = urlList.trending;
    else url = urlList[mode];

    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
    setFilteredMovies(data.results)
    setTotalPageNumber(data.total_pages);
    // console.log("currentPageNumber:", currentPageNumber, "mode: ", mode, " data ", data.results);

    // if (currentPageNumber === 1) {
    //   setMovies(data.results);
    //   setFilteredMovies(data.results);
    //   setPageList([data.results[0].id])
    // } else if (movies.includes(data.results)[3]) {
    //   console.log('data already stored in movies')
    // } else {
    //   setMovies(movies.concat(data.results));
    //   setFilteredMovies(movies);
    // }
    // setPageList(pageList.concat(data.results[0].id));
    // setCurrentPageNumber(currentPageNumber + 1);

  }

  function toggleModal(videoID) {
    if (!isModalOpened) getVideos(videoID)
    setIsModalOpened(!isModalOpened);
  }

  //Get Videos
  const getVideos = async (videoID) => {
    const apiKey = APIkey;
    const url = `https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=${apiKey}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    setVideoKey(data.results[Math.floor(Math.random() * data.results.length)].key);
  }

  function searchMovies(keywords) {
    if (keywords.length > 0) {
      let searchedMovies = [];
      if (movies.length > 0) {
        searchedMovies = movies.filter(movie => {
          if (movie.title) {
            if (movie.title.toLowerCase().includes(keywords.toLowerCase())) {
              // console.log('title matched')
              return true
            }
          }
          if (movie.overview) {
            if (movie.overview.toLowerCase().includes(keywords.toLowerCase())) {
              // console.log('overview matched')
              return true
            }
          }
          return false;
        }
        )
      };
      console.log(keywords, query, searchedMovies)
      searchedMovies.length > 0 ? setFilteredMovies(searchedMovies) : setFilteredMovies(movies);
    } else setFilteredMovies(movies)
  }

  useEffect(() => {
    getData(mode,1);
    setCurrentPageNumber(1);
  }, [mode]);

  useEffect(() => {
    searchMovies(query);
  }, [query]);


  const Children = ({ match }) => {
    window.location.href = `${urlHomePage}${match.params.id}`;
    return null;
  }

  if (movies.length <= 0) return <div>LOADING...</div>;
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className="App">
            <ReactModal
              closeTimeoutMS={200}
              isOpen={isModalOpened}
              style={customStyles}
              contentLabel="Example Modal"
              onRequestClose={() => toggleModal()}
            >
              <YouTube
                videoId={videoKey}             
                id={videoKey}                                    
              />
            </ReactModal>
            <Navbar
              setMode={setMode}
              setCurrentPageNumber={setCurrentPageNumber}
              setQuery={setQuery}
              searchMovies={searchMovies}
              query={query}
            />

            <div className="row container justify-content-center">
              <Carousel movies={movies} />
            </div>

            <div className="row container section">
              <Sidebar className=""
                movies={movies}
                setMovies={setMovies}
                setFilteredMovies={setFilteredMovies}
                setMode={setMode}
                setCurrentPageNumber={setCurrentPageNumber}
              />

              <div className="col container p-0 mainContent d-flex flex-column align-items-center pt-5">
                <Main
                  onMovies={filteredMovies}
                  getData={getData}
                  toggleModal={toggleModal}
                  mode={mode}
                />
                <Paginations
                  currentPageNumber={currentPageNumber}
                  totalPageNumber={totalPageNumber}
                  handlePage={getData}
                  mode={mode}
                />
              </div>

            </div>

            <Footer />
          </div>
        </Route>
        <Route path='/movie/:id' exact component={Children} />
      </Switch>
    </Router>
  );
}

export default App;
