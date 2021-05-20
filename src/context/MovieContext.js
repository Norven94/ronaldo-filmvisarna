import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
    const [movies, setMovies] = useState(null);

    const getAllMovies = async () => {
        let movies = await fetch("/api/v1/movies");
        movies = await movies.json();
        setMovies(movies);
    };


    const values = {
        movies,
        getAllMovies
    };

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider; 

