import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import Hero from "../components/Hero";

import "../scss/HomePage.scss";
import RecommendedMovies from "../components/RecommendedMovies";

const HomePage = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="homePage">
            {/* send down data to Hero with props */}

            {movies && (
                <Hero data={movies} />
            )}

            <RecommendedMovies />
        </div>
    );
};

export default HomePage;