import { useContext, useEffect } from "react";

import { MovieContext } from "../context/MovieContext";
import { ShowContext } from "../context/ShowContext";

import "../scss/MovieDetailPage.scss";

const MovieDetailPage = (props) => {
  const { movies } = useContext(MovieContext);
  const { currentShows, loading, getAllShowsByMovieId } = useContext(
    ShowContext
  );

  const { movieId } = props.match.params;

  useEffect(() => {
    getAllShowsByMovieId(movieId);
  });

  const renderMovieInfo = () => {
    return movies.map((movie, i) => {
      if (movie._id === movieId) {
        return (
          <div className="movieDetails" key={movie._id}>
            <div className="cover">
              <img src={movie.coverImage} alt={movie.title} />
            </div>

            <h1>{movie.title}</h1>

            <div className="overview">
              <span>{movie.genre[0]} / </span>
              <span>{movie.genre[1]} / </span>
              <span>{movie.timeLength} min / </span>
              <span>{movie.age}</span>
            </div>

            <div className="desc">
              <p>{movie.description}</p>
            </div>

            <div className="details">
              <p>Director: {movie.director}</p>
              <p>Language: {movie.language}</p>
              <p>Stars: {movie.artists}</p>
            </div>

            <div> TRAILER GOES HERE</div>
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderShowsInfo = () => {
    return currentShows.map((show, i) => {
      if (show.movieId._id === movieId) {
        return (
          <div key={show._id} className="showDetails">
            <div className="date">
              <p>{show.salonId.name}</p>
              <p>{show.date}</p>
            </div>

            <div className="time">
              <p>{show.time}</p>
              <button>Book</button>
            </div>
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
      {movies && renderMovieInfo()}
      {currentShows && renderShowsInfo()}
    </div>
  );
};

export default MovieDetailPage;
