import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Filter from "../components/Filter";

import MovieCard from "../components/MovieCard";
import "../scss/MoviesPage.scss";

const MoviesPage = () => {
  const { movies, getAllMovies } = useContext(MovieContext);

  const history = useHistory();

  const handleClickToMovieId = (movieId) => {
    history.push(`/movie/${movieId}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line
  }, []);

  let allMovies = "";
  if (movies) {
    allMovies = (
      <div>
        <Filter />
        {movies && (
          <div className="movieCards">
            {/* send down data to MovieCard with props, and render one MovieCard for every movie. */}
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
  } else allMovies = "no movies available";

  return <div className="moviesPage">{allMovies}</div>;
};

export default MoviesPage;
