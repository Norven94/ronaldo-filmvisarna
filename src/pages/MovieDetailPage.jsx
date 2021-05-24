import { useContext, useEffect, useState } from "react";

import { MovieContext } from "../context/MovieContext";
import { ShowContext } from "../context/ShowContext";

const MovieDetailPage = (props) => {
  const { movies } = useContext(MovieContext);
  const { currentShows, loading, getAllShowsByMovieId } = useContext(
    ShowContext
  );

  const { movieId } = props.match.params;

  useEffect(() => {
    getAllShowsByMovieId(movieId);
  }, []);

  const renderMovieInfo = () => {
    return movies.map((movie, i) => {
      if (movie._id == movieId) {
        return (
          <div key={movie._id}>
            <p>{movie.title}</p>
            <p>{movie.genre}</p>
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderShowsInfo = () => {
    return currentShows.map((show, i) => {
      if (show.movieId._id == movieId) {
        return (
          <div>
            <p>{show.salonId.name}</p>
            <p>{show.date}</p>
          </div>
        );
      } else {
        return;
      }
    });
  };

  return (
    <div>
      {loading && <div>LOADING...</div>}
      {currentShows && renderShowsInfo()}
      {movies && renderMovieInfo()}
    </div>
  );
};

export default MovieDetailPage;
