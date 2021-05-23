import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";

import MovieCard from "../components/MovieCard";
import "../scss/MoviesPage.scss";

const MoviesPage = () => {
  const history = useHistory();
  const { movies } = useContext(MovieContext);

  const handleClickToMovieId = (movieId) => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <div className="moviesPage">
      {movies && (
        <div className="movieCards">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie._id}
              onClick={() => handleClickToMovieId(movie._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
