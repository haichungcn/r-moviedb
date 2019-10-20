import React from 'react'

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
                    <Card className="movieCard p-0 shadow flip-card d-inline" id={`card${i}`}>
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
                                    <ListGroupItem onClick={() => props.getVideos()}>Watch Trailers</ListGroupItem>
                                    <ListGroupItem>Buy Ticket</ListGroupItem>
                                    <ListGroupItem>Home Page</ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Card>
                )
            })} <br />
            <button type="button" className="btn btn-outline-secondary rounded-pill loadMoreBtn ml-3 align-self-center" onClick={() => props.getData(props.mode)}><i class="fas fa-plus"></i></button>
        </div>
    )
}
