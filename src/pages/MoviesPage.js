import { useContext, useEffect } from 'react';
import { MovieContext } from "../context/MovieContext";

const MoviesPage = () => {
    const { movies, getAllMovies } = useContext(MovieContext);

    useEffect(() => {
        getAllMovies();
        // eslint-disable-next-line
    }, []);

    // console.log(movies);

    let content = "";
    if (movies) {
        content = (
            <div>
            <h1>All movies</h1>
            {movies.map((movie) => [
                <div>
                    <h3>
                        {movie.title}   
                    </h3>
                    <img src={movie.coverImage} />
                </div>
            ])}
            </div>
        ); 
    } else (
        content = "no movies available"
    );

    return <div>
        {content}
    </div>
}

export default MoviesPage;