import { useContext, useEffect, useState } from "react";
/* import { useHistory } from "react-router-dom"; */

import { ShowContext } from "../context/ShowContext";
import { BookingContext } from "../context/BookingContext";
import { UserContext } from "../context/UserContext";

import TicketsQuantity from "../components/TicketsQuantity";
import Login from "../components/Login";

import "../scss/BookingPage.scss";

const BookingPage = (props) => {
  const { currentShows } = useContext(ShowContext);
  const { setPrice, totalSum, totalTickets, addBookingToUser } = useContext(
    BookingContext
  );
  const { currentUser, showLogin, setShowLogin } = useContext(UserContext);

  const { showId } = props.match.params;

  const getPrice = () => {
    currentShows.map((show) => {
      if (show._id === showId) {
        setPrice(show.movieId.price);
      }
      return;
    });
  };

  useEffect(() => {
    getPrice();
  }, []);

  const addNewBooking = () => {
    if (currentUser) {
      let info = {
        showId: showId,
        tickets: [],
      };

      //Compress the array of objects to an single list, then replace quantity with ticketType name

      let tickets = totalTickets.flatMap((e) =>
        Array(e.quantity).fill(e.ticketType)
      );

      //For each ticket type, create an object and push into info
      tickets.forEach((ticket) => {
        let details = {
          ticketType: ticket,
          rowNumber: 1234, // This need to change
          seatNumber: 1234, // This need to change
        };
        info.tickets.push(details);
      });

      console.log(info);
      addBookingToUser(info);
      return;
    } else {
      setShowLogin(true);
      return <Login></Login>;
    }
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
