import { useContext, useEffect } from 'react';
import { MovieContext } from "../context/MovieContext";

import "../scss/MoviesPage.scss";

const MoviesPage = () => {
    const { movies, getAllMovies } = useContext(MovieContext);

    useEffect(() => {
        getAllMovies();
        // eslint-disable-next-line
    }, []);

    // console.log(movies);

    let allMovies = "";
    if (movies) {
        allMovies = (
            <div>
                    {movies.map((movie) => [
                    <div>
                        <img src={movie.coverImage} />
                        <h3 className="movieTitle">
                            {movie.title}   
                        </h3>

                        <div className="movieInfo">
                            <span>{movie.genre} / </span>
                            <span>{movie.timeLength} min / </span>
                            <span>{movie.price} kr</span>
                        </div>
                    </div>
                ])}
                
            </div>
        ); 
    } else (
        allMovies = "no movies available"
    );

    return <div className="moviesPage">
        {allMovies}
    </div>
}

export default MoviesPage;