import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselMain(props) {
    return (
        <Carousel className="col-12 Carousel m-0 p-0">
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[0].backdrop_path}`}
                    alt="First slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>{props.movies[0].title}</h3>
                    <p>{props.movies[0].vote_average}<span>&#11088;</span> voted by {props.movies[0].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[1].backdrop_path}`}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>{props.movies[1].title}</h3>
                    <p>{props.movies[1].vote_average}<span>&#11088;</span> voted by {props.movies[1].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[2].backdrop_path}`}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h4>{props.movies[2].title}</h4>
                    <p>{props.movies[2].vote_average}<span>&#11088;</span> voted by {props.movies[2].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[3].backdrop_path}`}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h4>{props.movies[3].title}</h4>
                    <p>{props.movies[3].vote_average}<span>&#11088;</span> voted by {props.movies[3].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[4].backdrop_path}`}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h4>{props.movies[4].title}</h4>
                    <p>{props.movies[4].vote_average}<span>&#11088;</span> voted by {props.movies[4].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
