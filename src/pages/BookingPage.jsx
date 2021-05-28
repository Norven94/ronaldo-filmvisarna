import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ShowContext } from "../context/ShowContext";
import { BookingContext } from "../context/BookingContext";
import { UserContext } from "../context/UserContext";

import TicketsQuantity from "../components/TicketsQuantity";
import Login from "../components/Login";
import Salon from "../components/Salon";

import "../scss/BookingPage.scss";

const BookingPage = (props) => {
  const history = useHistory();
  const { currentShows } = useContext(ShowContext);
  const {
    setPrice,
    totalSum,
    selected,
    setSelected,
    setTotalSum,
    totalTickets,
    setTotalTickets,
    addBookingToUser,
  } = useContext(BookingContext);
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

        console.log(selected)

        //For each ticket type, create an object and push into info
        tickets.forEach((ticket, i) => {
          let details = {
            ticketType: ticket,
            rowNumber: selected[i].row,
            seatNumber: selected[i].seatNumber,
          };
          info.tickets.push(details);
        });

        console.log(info);
        /* handleReset(); */
        addBookingToUser(info);
        setSelected([]);
        setTotalTickets([
          { ticketType: "Ordinary", quantity: 0 },
          { ticketType: "Senior", quantity: 0 },
          { ticketType: "Children", quantity: 0 },
        ]);
        setTotalSum(0)
        history.push("/confirmation")

        return;
      } else {
        setShowLogin(true);
        return <Login></Login>;
      }
    } else {
      alert("You must add at least one ticket and choose one seat")
    }
  };

  /*   const handleReset = () => {
      setTotalSum(0);
  
    } 
   */
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
                <button onClick={() => addNewBooking()}>
                  RESERVE TICKETS
                </button>
              </div>
              <div className="salon">
                <Salon showId={showId} />
              </div>
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
