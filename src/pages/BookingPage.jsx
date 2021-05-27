import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ShowContext } from "../context/ShowContext";
import { BookingContext } from "../context/BookingContext";

import TicketsQuantity from "../components/TicketsQuantity";

import "../scss/BookingPage.scss";

const BookingPage = (props) => {
  const { currentShows, getAllShowsByMovieId } = useContext(ShowContext);
  const { totalSum } = useContext(BookingContext);
  const [currentShow, setCurrentShow] = useState();
  const [price, setPrice] = useState();

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
                <img src={show.movieId.coverImage} alt={show.movieId.title} />
              </div>
              <div className="ticket">
                <TicketsQuantity totalSum={totalSum}></TicketsQuantity>
              </div>
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
