import React from 'react'

import {
    Card,
    ListGroup,
    ListGroupItem,
}  from 'react-bootstrap';


export default function Main(props) {

    return (
        <div className="row flex-nowrap p-0 m-0 align-items-center" style={{ height: '350px', width: "100%", overflowX: 'scroll' }}>
            {props.onMovies.map((movie, i) => {
            return (
                <Card className="movieCard p-0 shadow flip-card d-inline mx-3" id={`card${i}`}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Card.Img className="cardImg" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Card.Footer className="cardFooter p-0">{movie.vote_average} IMDB</Card.Footer>
                        </div>
                        <div className="flip-card-back">
                            <Card.Body>
                                <Card.Title>{movie.original_title}<br /><small>{movie.release_date}</small></Card.Title>
                                <Card.Text>
                                {movie.overview}
                                </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                <ListGroupItem>Watch Trailer</ListGroupItem>
                                <ListGroupItem>Buy Ticket</ListGroupItem>
                                <ListGroupItem>Home Page</ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </Card>
            )
        })}
            <button type="button" className="btn btn-outline-secondary rounded-pill loadMoreBtn" onClick={() => props.getData()}><i class="fas fa-plus"></i></button>
        </div>
    )
}
