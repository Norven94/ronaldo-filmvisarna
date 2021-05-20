import { useContext, useEffect } from 'react';
import { MovieContext } from "../context/MovieContext";

const MoviesPage = () => {
    const { movies, fetchAllMovies } = useContext(MovieContext);

    useEffect(() => {
        fetchAllMovies();
    }, []);
 

    let content = "";
    if (movies) {
        content = (
            <h1>All movies</h1>
        ); 
    } else (
        content = "no movies available"
    );

    return <div>
        {content}
    </div>
}

export default MoviesPage;