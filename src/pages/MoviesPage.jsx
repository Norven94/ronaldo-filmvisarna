import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import MovieCard from "../components/MovieCard";
import "../scss/MoviesPage.scss";

const MoviesPage = () => {
  const { movies } = useContext(MovieContext);
  // get all movies from context

  return (
    <div className="moviesPage">
      
      {movies && (
        <div className="movieCards" >
          {/* send down data to MovieCard with props, and render one MovieCard for every movie. */}
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;