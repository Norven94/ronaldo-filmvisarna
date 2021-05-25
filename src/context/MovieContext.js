import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
    const [allMovies, setAllMovies] = useState(null);
    const [movies, setMovies] = useState(null);
    const [allGenres, setAllGenres] = useState([])

    const getAllMovies = async () => {
        let movies = await fetch("/api/v1/movies");
        movies = await movies.json();
        setMovies(movies);
        setAllMovies(movies)
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

    useEffect(() => {
        if(allMovies) {                        
            const genres = allMovies.map(movie => movie.genre).flat(1);

            const distinct = (value, index, self) => {
                return self.indexOf(value) === index
            }
            setAllGenres(genres.filter(distinct));           
        }      
    },[allMovies])

    const values = {
        movies,
        getAllMovies,
        filterMovies,
        allGenres
    };

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider; 

