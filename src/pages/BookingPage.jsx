import { useContext, useEffect, useState } from "react";
/* import { useHistory } from "react-router-dom"; */

import { ShowContext } from "../context/ShowContext";
import { BookingContext } from "../context/BookingContext";
import { UserContext } from "../context/UserContext";

import TicketsQuantity from "../components/TicketsQuantity";

import "../scss/BookingPage.scss";

const BookingPage = (props) => {
  const { currentShows } = useContext(ShowContext);
  const { setPrice, totalSum, totalTickets, addBookingToUser } = useContext(
    BookingContext
  );
  const { currentUser, showLogin } = useContext(UserContext);
  const [currentShow, setCurrentShow] = useState();

  const { showId } = props.match.params;

  const getCurrentShow = () => {
    currentShows.map((show) => {
      if (show._id === showId) {
        setCurrentShow(show);
        setPrice(show.movieId.price);
      }
      return;
    });
  };

  useEffect(() => {
    getCurrentShow();
  }, []);

  const addNewBooking = () => {
    let info = {
      showId: showId,
      tickets: [
        {
          ticketType: "Children",
          rowNumber: 2, 
          seatNumber: 2,
        },
      ],
    };
    addBookingToUser(info);
    console.log(info);
    return;
  };

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
                <button onClick={() => addNewBooking(show._id)}>
                  RESERVE TICKETS
                </button>
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
