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

      //Duplicate totalTickets Object by given quantity in order to send to the database
      let tickets = totalTickets.flatMap((e) =>
        Array(e.quantity).fill({ name: e.name })
      );

      //For each ticket type, create an object and push into info
      tickets.forEach((ticket) => {
        let Obj = {
          ticketType: ticket,
          rowNumber: 11, // This need to change
          seatNumber: 11, // This need to change
        };
        info.tickets.push(Obj);
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
