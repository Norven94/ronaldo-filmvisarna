import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

import Hero from "../components/Hero";

import RecommendedMovies from "../components/RecommendedMovies";
import NinetiesMovies from "../components/NinetiesMovies";

const HomePage = () => {
    const { movies, getAllMovies } = useContext(MovieContext);

    useEffect(() => {
        getAllMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="homePage">
            {/* send down data to Hero, RecommendedMovies, NinetiesMovies with props */}

            {movies && (
                <div>
                    <Hero data={movies} />
                    <RecommendedMovies data={movies}/>
                    <NinetiesMovies data={movies}/>
                </div>
            )}

        </div>
    );
};

export default HomePage;