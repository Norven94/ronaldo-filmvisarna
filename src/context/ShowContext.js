import { createContext, useState, useEffect } from "react";

export const ShowContext = createContext();

const ShowProvider = (props) => {
  const [currentShows, setCurrentShows] = useState([]);

  const getAllShowsByMovieId = async (movieId) => {
    let shows = await fetch(`api/v1/shows/${movieId}`);
    shows = await shows.json();
    setCurrentShows(shows);
  };

  const values = {
    getAllShowsByMovieId,
  };

  return (
    <ShowContext.Provider value={values}>{props.children}</ShowContext.Provider>
  );
};

export default ShowProvider;
