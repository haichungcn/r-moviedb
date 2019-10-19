import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { APIkey } from "./utils";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  async function getData() {
    const apiKey = APIkey;  
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${currentPageNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    if (currentPageNumber === 1) {
      setMovies(data.results);
      setFilteredMovies(data.results);
    } else {
      setMovies(movies.concat(data.results));
      setFilteredMovies(movies);
    };
    setCurrentPageNumber(currentPageNumber + 1);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log('movies 1:', movies,' filteredMovies: ', filteredMovies)

  if (movies.length <= 0) return <div>LOADING...</div>;
  return (
    <div className="App">
      <Navbar />

      <div className="row container justify-content-center mb-1">
        <Carousel movies={movies} />

        <div className="col-4 rightSideCarousel">
          <img
            src="https://i.dailymail.co.uk/1s/2019/08/05/17/16915676-0-image-a-1_1565020944826.jpg"
            height="600"
            alt="righSideCarousel"
          />
        </div>
      </div>

      <div className="row container section">
        <Sidebar className="py-4 px-2"
          movies={movies}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
        />

        <div className="col-10 p-0 h-100 mainContent">
          <div className="row container-fluid m-0 p-2 d-flex flex-row">
            <h2>TRENDING</h2>
            <Main 
            onMovies = {filteredMovies}
            getData={getData}
            />
          </div>
          <div className="row container-fluid m-0 p-0 d-flex flex-row">
            <h2>HIGHES RATED</h2>
            <Main
            onMovies={filteredMovies}
            getData={getData}
            />
          </div>
          <div className="row container-fluid m-0 p-0 d-flex flex-row">
            <h2>OUR PICKS</h2>
            <Main
            onMovies={filteredMovies}
            getData={getData}
            />
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
