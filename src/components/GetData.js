import React from 'react';
import { APIkey } from "../utils/index";

async function GetData(movies, setMovies, setCurrentPageNumber, currentPageNumber) {
    const apiKey = APIkey;  
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${currentPageNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    currentPageNumber === 1 ? setMovies(data.results) : setMovies(movies.concat(data.results));;
    setCurrentPageNumber(currentPageNumber + 1);
}


// function loadMore(movies, setMovies, setCurrentPageNumber, currentPageNumber) {
//     getData(movies, setMovies, setCurrentPageNumber,currentPageNumber);
// }

// function filter()
// export {loadMore};

export default GetData; 