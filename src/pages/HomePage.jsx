import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import Hero from "../components/Hero";

import "../scss/HomePage.scss";
import RecommendedMovies from "../components/RecommendedMovies";

const HomePage = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="homePage">
            {/* send down data to Hero and RecommendedMovies with props */}

            {movies && (
                <div>
                    <Hero data={movies} />
                    <RecommendedMovies data={movies}/>
                </div>
            )}

        </div>
    );
};

export default HomePage;