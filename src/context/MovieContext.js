import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
    const [movies, setMovies] = useState(null);

    const getAllMovies = async () => {
        let movies = await fetch("/api/v1/movies");
        movies = await movies.json();
        setMovies(movies);
    };

    const filterMovies = async (filterSettings) => {
        console.log(filterSettings)
        let filterResult = await fetch("/api/v1/movies", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(filterSettings)
        })
        filterResult = await filterResult.json();
        console.log(filterResult)
        setMovies(filterResult);
    }

    const values = {
        movies,
        getAllMovies,
        filterMovies
    };

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider; 

