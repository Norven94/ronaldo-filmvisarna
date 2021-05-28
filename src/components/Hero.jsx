import { Link } from "react-router-dom";

import "../scss/Hero.scss";
import Carousel from 'react-bootstrap/Carousel';

// receive props from parent Home component for movie data
const Hero = (props) => {

    // creating an array with the popular movies
    let movies = props.data;
    let popularMovies = "";
    if (movies) {popularMovies = movies.filter((movie) => movie.popular === true);}
    

    return(
        <div className="hero">
            <Carousel className="carouselWrapper">
                {popularMovies.map((popularMovie) => {
                    return (
                        <Carousel.Item className="carouselItem" key={popularMovie._id}>
                            <Link to={`/movie/${popularMovie._id}`} >
                                <img className="carouselImage" src={popularMovie.heroImage} alt={popularMovie.title} />
                                <Carousel.Caption className="carouselCaption">
                                    <h2> {popularMovie.title} </h2>
                                    <span> {popularMovie.genre.join(", ")} /</span>
                                    <span> {popularMovie.timeLength} min /</span>
                                    <span> {popularMovie.price} kr</span>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Hero;