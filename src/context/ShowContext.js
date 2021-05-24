import { createContext, useState, useEffect } from "react";

export const ShowContext = createContext();

const ShowProvider = (props) => {
  const [currentShows, setCurrentShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllShowsByMovieId();
 
   
}, []);

  const getAllShowsByMovieId = async (movieId) => {
    let shows = await fetch(`api/v1/shows/${movieId}`);
    shows = await shows.json();
    setCurrentShows(shows);
    setLoading(false);
    console.log(currentShows);
  };

  const values = {
    getAllShowsByMovieId,
    currentShows,
    loading
  };

  return (
    <ShowContext.Provider value={values}>{props.children}</ShowContext.Provider>
  );
};

export default ShowProvider;
