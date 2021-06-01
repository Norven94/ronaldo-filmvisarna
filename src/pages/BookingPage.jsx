import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { ShowContext } from "../context/ShowContext";
import { BookingContext } from "../context/BookingContext";
import { UserContext } from "../context/UserContext";

import TicketsQuantity from "../components/TicketsQuantity";
import TicketSum from "../components/TicketSum";
import Login from "../components/Login";
import Salon from "../components/Salon";

import "../scss/BookingPage.scss";

const BookingPage = (props) => {
  const history = useHistory();
  const { currentShow, getShowById } = useContext(ShowContext);
  const {
    setPrice,
    price,
    totalSum,
    selected,
    setSelected,
    setTotalSum,
    setConfirmationDetails,
    totalTickets,
    setTotalTickets,
    addBookingToUser,
  } = useContext(BookingContext);

  const { currentUser, setShowLogin } = useContext(UserContext);
  const { showId } = props.match.params;

  useEffect(() => {
    getShowById(showId);
    handleReset();
  }, []);

  useEffect(() => {
    getPrice();
  });

  const getPrice = () => {
    currentShow.map((show) => {
      setPrice(show.movieId.price);
      return;
    });
  };

  const addNewBooking = (show) => {
    if (selected.length !== 0) {
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
        tickets.forEach((ticket, i) => {
          let details = {
            ticketType: ticket,
            rowNumber: selected[i].row,
            seatNumber: selected[i].seatNumber,
          };
          info.tickets.push(details);
        });
        addBookingToUser(info);
        setConfirmationDetails([info, show]);
        history.push("/confirmation");

        return;
      } else {
        setShowLogin(true);
        return <Login></Login>;
      }
    } else {
      toast.error("You must add at least one ticket and choose one seat");
    }
  };

  const handleReset = () => {
    setTotalTickets([
      { ticketType: "Ordinary", quantity: 0 },
      { ticketType: "Senior", quantity: 0 },
      { ticketType: "Children", quantity: 0 },
    ]);
    setTotalSum(0);
    setSelected([]);
  };

  return (
    <div className="wrapper">
      <Toaster />
      {currentShow.map((show) => {
        if (show._id == showId) {
          return (
            <section className="booking" key={show._id}>
              <div className="movie">
                <h1> {show.movieId.title}</h1>
                <p>
                  {show.date},{show.time}
                </p>
                <img src={show.movieId.coverImage} alt={show.movieId.title} />
              </div>

              <div className="quantity">
                <TicketsQuantity></TicketsQuantity>
              </div>

              <div className="salon">
                <Salon showId={showId} />
              </div>

              <div className="seats">
                <p>{show.salonId.name}</p>
              </div>

              <div className="sum">
                <TicketSum></TicketSum>
              </div>

              <div className="cta">
                <button onClick={() => addNewBooking(show)}>
                  RESERVE TICKETS
                </button>
              </div>
            </section>
          );
        }
      })}
    </div>
  );
};
export default BookingPage;
