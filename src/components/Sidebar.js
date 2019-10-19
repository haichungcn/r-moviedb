import React from 'react'
import { genreList } from '../utils'

export default function Sidebar({movies, filteredMovies, setFilteredMovies}) {
    function filterByGenre(id) {
        setFilteredMovies(movies.filter(movie => movie.genre_ids.includes(id)))
    }
    let allIDs = [];
    let currentGenreList = [];
    movies.map(movie => allIDs.push(movie.genre_ids));
    allIDs = allIDs.flat(Infinity);
    currentGenreList = genreList.filter(genre => allIDs.includes(genre.id));
    console.log(allIDs, currentGenreList);

    return (
        <div className="col-2 sideBar" style={{backgroundColor:'red', height:'100vh'}}>
            <div className="row">
                <h2>Filter by:</h2>
            </div>
            <div>
                <ul className="list-group"><h3>Genres:</h3></ul>
                {currentGenreList.map(genre => <li className="list-group-item" onClick={() => filterByGenre(genre.id)} value={genre.id}>{genre.name}</li>)}
            </div>
        </div>
    )
}
