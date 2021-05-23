import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import MovieCard from "../components/MovieCard";
import "../scss/MoviesPage.scss";

const MoviesPage = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="moviesPage">
      
      {movies && (
        <div className="movieCards" >
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;