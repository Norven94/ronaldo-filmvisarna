import { useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import { ShowContext } from "../context/ShowContext";

import "../scss/MovieDetailPage.scss";

const MovieDetailPage = (props) => {
  const { movies } = useContext(MovieContext);
  const { currentShows, loading, getAllShowsByMovieId } = useContext(
    ShowContext
  );
  const history = useHistory();
  
  const goToShowsRef = useRef(null);

  const { movieId } = props.match.params;

  useEffect(() => {
    getAllShowsByMovieId(movieId);
  });

  const goToShow = () => {
    goToShowsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClickToShowId = (showId) => {
    history.push(`/booking/${showId}`);
    window.scrollTo(0, 0);
  };


  const renderMovieInfo = () => {
    return movies.map((movie) => {
      if (movie._id === movieId) {
        return (
          <section className="movieDetails" key={movie._id}>
            <div className="cover">
              <img src={movie.coverImage} alt={movie.title} />
            </div>
            <div className="info">
              <div>
                <h1>{movie.title}</h1>
                <span>{movie.genre.join(", ")} / </span>
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
                  {movie.artists.join(", ")}
                </p>
              </div>
              <button onClick={goToShow}> TICKETS</button>
            </div>
            <div className="trailer">
              <iframe
                width="100%"
                height="100%"
                src={movie.trailerUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        );
      } else {
        return null;
      }
    });
  };

  const renderShowsInfo = () => {
    return currentShows.map((show) => {
      if (show.movieId._id === movieId) {
        return (
          <section key={show._id} className="showDetails">
            <div>
              <h3>{show.salonId.name}</h3>
              <h3>{show.date}</h3>
            </div>

            <div>
              <p>{show.time}</p>
              <button onClick={() => handleClickToShowId(show._id)}>
                BOOK
              </button>
            </div>
          </section>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <article>
      {loading && <div>LOADING...</div>}
      {movies && renderMovieInfo()}

      <h2 ref={goToShowsRef} className="showsTitle">
        Shows
      </h2>
      {currentShows && renderShowsInfo()}
    </article>
  );
};

export default MovieDetailPage;
