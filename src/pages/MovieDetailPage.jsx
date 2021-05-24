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
            <div className="info">
              <div className="title">
                <h1>{movie.title}</h1>
                <span>{movie.genre[0]} / </span>
                <span>{movie.genre[1]} / </span>
                <span>{movie.timeLength} min / </span>
                <span>{movie.age}</span>
              </div>

              <div className="desc">
                <p>{movie.description}</p>
              </div>

              <div className="details">
                <p>
                  <span>Director: </span>
                  {movie.director}
                </p>
                <p>
                  <span>Language: </span>
                  {movie.language}
                </p>
                <p>
                  <span>Stars: </span>
                  {movie.artists}
                </p>
              </div>
              <button>TICKETS</button>
            </div>
            <div className="trailer">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pWfjJ6bOy7w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderShowsInfo = () => {
    return currentShows.map((show) => {
      if (show.movieId._id === movieId) {
        return (
          <div key={show._id} className="showDetails">
            <div>
              <h2>{show.salonId.name}</h2>
              <h2>{show.date}</h2>
            </div>

            <div>
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

      <h3 className="showsTitle">Shows</h3>
      {currentShows && renderShowsInfo()}
    </div>
  );
};

export default MovieDetailPage;
