import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ShowContext } from "../context/ShowContext";

import "../scss/BookingPage.scss";

const BookingPage = (props) => {
  const { currentShows, getAllShowsByMovieId } = useContext(ShowContext);
  const [currentShow, setCurrentShow] = useState();

  const { showId } = props.match.params;

  return (
    <div className="wrapper">
      {currentShows.map((show) => {
        if (show._id == showId) {
          return (
            <section className="booking" key={show._id}>
              <div className="movie">
                <h1> {show.movieId.title}</h1>
                <p>
                  {show.date}, {show.time}
                </p>
                <img src={show.movieId.coverImage} alt={show.movieId.title}/>
              </div>
              <div className="ticket"> Ticket Goes here</div>
              <div className="salon"> Salon Goes here</div>
            </section>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
export default BookingPage;
