import "../scss/Hero.scss";
import Carousel from 'react-bootstrap/Carousel';

const Hero = (props) => {
    // receive props from parent Home component for movie data

    // creating an array with the popular movies
    let movies = props.data;
    let popularMovies = "";
    if (movies) {popularMovies = movies.filter((movie) => movie.popular === true);}

    // console.log(popularMovies);

    return(
        <div className="hero">
            <Carousel className="carouselWrapper">
                {popularMovies.map((popularMovie) => {
                    return (
                        <Carousel.Item className="carouselItem">
                                <img className="carouselImage" src={popularMovie.heroImage} alt={popularMovie.title} />
                            <Carousel.Caption className="carouselCaption">
                                <h2> {popularMovie.title} </h2>
                                <span> {popularMovie.genre} /</span>
                                <span> {popularMovie.timeLength} min /</span>
                                <span> {popularMovie.price} kr</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Hero;