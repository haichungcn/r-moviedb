import React from 'react'
import {Link} from 'react-router-dom';
import {urlHomePage} from '../utils/';

import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Badge
} from 'react-bootstrap';


export default function Main(props) {


    return (
        <div className="row container p-0 pl-2 m-0 movieCardContainer d-flex justify-content-center">
            {props.onMovies.map((movie, i) => {
                return (
                    <Card className="movieCard p-0 shadow flip-card d-inline" id={`${i}`} key={movie.id}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card.Img className="cardImg" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <Card.Footer className="cardFooter p-0">
                                    <Button variant="light container-fluid">
                                    Voted   <Badge variant="secondary">{movie.vote_average}<span> &#11088;</span></Badge>
                                        <span className="sr-only">Voted {movie.vote_average}</span>
                                    </Button>
                                </Card.Footer>
                            </div>
                            <div className="flip-card-back">
                                <Card.Body>
                                    <Card.Title>{movie.original_title}<br /><small>{movie.release_date}</small></Card.Title>
                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem onClick={() => props.toggleModal(movie.id)}>Watch Trailers</ListGroupItem>
                                    <ListGroupItem>Buy Ticket</ListGroupItem>
                                    <ListGroupItem>
                                        <Link to={`/movie/${movie.id}-${movie.title && movie.title.split(' ').join('-')}`} style={{ listStyleType: "none" }}>
                                        Home Page
                                        </Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Card>
                )
            })} <br />
            
        </div>
    )
}
