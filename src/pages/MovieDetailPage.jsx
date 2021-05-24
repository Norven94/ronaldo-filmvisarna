import { useContext } from "react";

/* import { MovieContext } from "../context/MovieContext"; */
import { ShowContext } from "../context/ShowContext";

const MovieDetailPage = (props) => {
  /*   const { movies } = useContext(MovieContext); */
  const { currentShows, loading } = useContext(ShowContext);

  const { movieId } = props.match.params;

  /*  const renderMovieInfo = () => {};
   */

  const renderShowsInfo = () => {
  };

  return (
    <div>
      {loading && <div>LOADING</div>}
      {currentShows && renderShowsInfo()}
    </div>
  );
};

export default MovieDetailPage;
