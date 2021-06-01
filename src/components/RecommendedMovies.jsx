import React from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import  "../scss/RecommendedMovies.scss";


// receive props from parent Home component for movie data
export const RecommendedMovies = (props) => {

    // create array with the recommended movies
    let movies = props.data;
    let recommendedMovies = "";
    if (movies) {recommendedMovies = movies.filter((movie) => movie.recommended === true);}

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1800 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1800, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 500 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 500, min: 350 },
          items: 2
        },
        extraSmall: {
            breakpoint: { max: 350, min: 0 },
            items: 1
        }
    };

    return (
        <div className="recommendedMovies">
            <h3>Filmvisarnas favorites</h3>
            <Carousel 
                responsive={responsive}
                infinite={true}
                draggable={false}
                className = "carousel"
            >
                {recommendedMovies.map((recommendedMovie) => {
                    return (
                        <div className="recommendedMovieCard" key={recommendedMovie._id}>
                            <Link to={`/movie/${recommendedMovie._id}`}>
                                <img className="recommendedMovieCardImage" src={recommendedMovie.coverImage} alt={recommendedMovie.title}/>
                            </Link>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default RecommendedMovies;
