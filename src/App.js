import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import getData from "./components/GetData"
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    getData({
      onPageNumber : {currentPageNumber},
      onSetMovies : {setMovies},
      onSetCurrentPageNumber : {setCurrentPageNumber}
    });
  }, []);
  console.log("movies 2: ", movies);

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
          />
        </div>
      </div>

      <div className="row container section">

        <Sidebar className="py-4 px-2"/>

        <div className="col-10 p-0 h-100 mainContent">
          <div className="row container-fluid m-0 p-2 d-flex flex-row">
            <h2>TRENDING</h2>
            <Main onMovies={movies} />
          </div>
          <div className="row container-fluid m-0 p-0 d-flex flex-row">
            <h2>HIGHES RATED</h2>
            <Main onMovies={movies} />
          </div>
          <div className="row container-fluid m-0 p-0 d-flex flex-row">
            <h2>OUR PICKS</h2>
            <Main onMovies={movies} />
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
