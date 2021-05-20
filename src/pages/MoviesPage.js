import { useContext, useEffect } from 'react';
import MovieProvider, { MovieContext } from "../context/MovieContext";

const MoviesPage = () => {
    // const { movies, fetchAllMovies } = useContext(MovieContext);

    // useEffect(() => {
    //     fetchAllMovies();
    //     // eslint-disable-next-line
    // }, []);

    let movies = true;


    let content = "";
    if (movies) {
        content = (
            <h1>List of all movies coming soon...</h1>
        ); 
    } else (
        content = "no movies available"
    );

    return <div>
        {content}
    </div>
}

export default MoviesPage;