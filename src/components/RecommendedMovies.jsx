import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import  "../scss/RecommendedMovies.scss";


// receive props from parent Home component for movie data
export const RecommendedMovies = (props) => {

    // create array with the recommended movies
    let movies = props.data;
    let recommendedMovies = "";
    if (movies) {recommendedMovies = movies.filter((movie) => movie.recommended === true);}

    console.log(recommendedMovies);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };



    return (
        <div className="recommendedMovies">
            <h3>Recommended movies</h3>
            <Carousel 
                responsive={responsive}
                infinite={true}
            >
                {recommendedMovies.map((recommendedMovie) => {
                    return (
                        <div> <img src={recommendedMovie.coverImage}/> </div>
                    )
                })}



                {/* <div className="item">Item 1</div>
                <div className="item">Item 2</div>
                <div className="item">Item 3</div>
                <div className="item">Item 4</div> */}
            </Carousel>
        </div>
    )
}

export default RecommendedMovies;
