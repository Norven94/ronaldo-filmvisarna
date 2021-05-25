import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import Hero from "../components/Hero";

import "../scss/HomePage.scss";

const HomePage = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="homePage">
            {/* send down data to Hero with props */}

            {movies && (
                <Hero data={movies} />
            )}
        </div>
    );
};

export default HomePage;