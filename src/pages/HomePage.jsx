// import { useContext } from "react";
// import { MovieContext } from "../context/MovieContext";

import Hero from "../components/Hero";

import "../scss/HomePage.scss";

const HomePage = () => {
    // const { movies } = useContext(MovieContext);

    return (
        <div className="homePage">
            <Hero />
        </div>
    );
};

export default HomePage;