import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselMain(props) {
    console.log("insideCarousel:", props.movies)
    return (
        <Carousel className="Carousel">
            <Carousel.Item className="overflow-hidden d-flex justify-content-start align-items-center">
                <img
                    className="d-block w-100 overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[0].backdrop_path}`}
                    alt="First slide"
                    width="120%"
                    height="100%"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>{props.movies[0].title}</h3>
                    <p>{props.movies[0].vote_average}<span>&#11088</span>; voted by {props.movies[0].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[1].backdrop_path}`}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>{props.movies[1].title}</h3>
                    <p>{props.movies[1].vote_average}<span>&#11088</span>; voted by {props.movies[1].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 overflow-hidden carouselImg"
                    src={`https://image.tmdb.org/t/p/original/${props.movies[2].backdrop_path}`}
                    alt="Third slide"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>{props.movies[2].title}</h3>
                    <p>{props.movies[2].vote_average}<span>&#11088</span>; voted by {props.movies[2].vote_count}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
