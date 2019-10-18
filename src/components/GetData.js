import React from 'react';
import { APIkey } from "../utils/index";

async function GetData(props) {
        const [movies, setMovies] = useState([]);
        const [currentPageNumber, setCurrentPageNumber] = useState(1);
        
        const apiKey = APIkey;
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${props.onPageNumber}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("data: ", data);
        props.onSetMovies(data.results);
        props.onSetCurrentPageNumber(props.onPageNumber + 1);
        return '';
}

export default GetData;