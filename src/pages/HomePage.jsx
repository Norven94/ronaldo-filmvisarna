import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import Hero from "../components/Hero";

import "../scss/HomePage.scss";
import RecommendedMovies from "../components/RecommendedMovies";
import NinetiesMovies from "../components/NinetiesMovies";

const HomePage = () => {
    const { movies } = useContext(MovieContext);

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