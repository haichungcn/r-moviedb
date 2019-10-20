import React, { useEffect, useState } from "react";
import { genreList } from "../utils";

export default function Sidebar({ movies, filteredMovies, setFilteredMovies, setMode, setCurrentPageNumber }) {
    const [active, setActive] = useState("active");
    const [currentGenreList, setCurrentGenreList] = useState([]);
    function filterByGenre(id) {
        setFilteredMovies(movies.filter(movie => movie.genre_ids.includes(id)));
    }

    function displayGenre() {
        let allIDs = [];
        movies.map(movie => allIDs.push(movie.genre_ids));
        allIDs = allIDs.flat(Infinity);
        setCurrentGenreList(genreList.filter(genre => allIDs.includes(genre.id)));
    }

    function displaySidebar(on) {
        if (on === true) setActive('')
        else active === "" ? setActive("active") : setActive("");
    }

    useEffect(() => {
        displayGenre();
    }, [movies]);

    return (
        <nav id="sidebar" className={`px-0 text-left ${active}`}>
            <div className="sidebar-header my-0 mx-0 px-2 py-3">
                <button
                    type="button"
                    className="sideBarBtn btn"
                    onClick={() => displaySidebar()}
                >
                    <i className="fas fa-filter"><span> FILTER</span></i>
                    {/* <span> FILTER by: </span> */}
                </button>
            </div>
            <div className="sideBarBody">
                <div className="col-1"></div>
                <div className="col-11">
                    <ul className="list-unstyled components">
                        <li className="my-4">
                            <a 
                                href="#sidebar"
                                onClick={() => {
                                    displaySidebar(true)
                                    setMode('trending')
                                    setCurrentPageNumber(1)
                                }}
                            >
                                <i className="fas fa-fire"></i> Trending
                            </a>
                        </li>
                        <li className="my-4">
                            <a 
                                href="#sidebar"
                                onClick={() => {
                                    displaySidebar(true)
                                    setMode('toprated')
                                    setCurrentPageNumber(1)
                                }}
                            >
                                <i className="fas fa-star"></i> Top Rated
                            </a>
                        </li>
                        <li className="my-4">
                            <a 
                                href="#sidebar"
                                onClick={() => {
                                    displaySidebar(true)
                                    setMode('upcoming')
                                    setCurrentPageNumber(1)
                                }}
                            >
                                <i className="fas fa-star-half-alt"></i> Up Coming
                        </a>
                        </li>
                        <li className="my-4">
                            <a 
                                href="#sidebar"
                                onClick={() => {
                                    displaySidebar(true)
                                    setMode('nowplaying')
                                    setCurrentPageNumber(1)
                                }}
                            >
                                <i className="fas fa-play"></i> Now Playing
                        </a>
                        </li>
                        <li className="my-4">
                            <a
                                href="#pageSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                className="dropdown-toggle"
                                onClick={() => displaySidebar(true)}
                            >
                                <i className="fas fa-film"></i> Genres:
                            </a>
                            <ul className="collapse list-unstyled my-2" id="pageSubmenu">
                                {currentGenreList.map(genre => (
                                    <li
                                        className="p-auto m-0 mb-2 align-center"
                                        onClick={() => filterByGenre(genre.id)}
                                        value={genre.id}
                                    >
                                        <a href="#">{genre.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
