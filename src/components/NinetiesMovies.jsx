import React from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "../scss/NinetiesMovies.scss";

// receive props from parent Home component for movie data
export const NinetiesMovies = (props) => {


    // create array with all movies from the 1990s
    let movies = props.data;
    let ninetiesMovies = "";
    if (movies) {ninetiesMovies = movies.filter((movie) => movie.year.startsWith("199") );}

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
        <div className="ninetiesMovies">
            <h3>Back to the 1990s</h3>
            <Carousel 
                responsive={responsive}
                infinite={true}
                draggable={false}
                className = "carousel"
            >
                {ninetiesMovies.map((ninetiesMovie) => {
                    return (
                        <div className="ninetiesMovieCard" key={ninetiesMovie._id}>
                            <Link to={`/movie/${ninetiesMovie._id}`}>
                                <img className="ninetiesMovieCardImage" src={ninetiesMovie.coverImage} alt={ninetiesMovie.title}/>
                            </Link>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )

}

export default NinetiesMovies;
