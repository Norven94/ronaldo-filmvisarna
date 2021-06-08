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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const backButton = <FontAwesomeIcon icon={faChevronLeft} size={"2x"} />;

const BookingPage = (props) => {
  const history = useHistory();
  const { currentShow, getShowById } = useContext(ShowContext);
  const {
    setPrice,
    selected,
    setSelected,
    setTotalSum,
    setConfirmationDetails,
    totalTickets,
    setTotalTickets,
    addBookingToUser,
    totalSum,
  } = useContext(BookingContext);

  const { currentUser, setShowLogin, setCurrentUser } = useContext(UserContext);
  const [summaryOpen, setSummaryOpen] = useState(false); // Opens booking details

  const { showId } = props.match.params;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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

  const addNewBooking = async (show) => {
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

        let updatedUser = await addBookingToUser(info);
        setCurrentUser(updatedUser);
        
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

  const openSummary = () => {
    setSummaryOpen(!summaryOpen);
  };

  const returnToMovie = () => {
    history.goBack();
  };

  return (
    <div className="wrapper">
      <Toaster />
      {currentShow.map((show) => {
        if (show._id == showId) {
          return (
            <section className="booking" key={show._id}>
              <i className="backButton" onClick={returnToMovie}>
                {backButton}
              </i>

              <div className="movie">
                <h1>{show.movieId.title}</h1>
                <div className="details">
                  <div>
                    <p>Salon</p>
                    <p>{show.salonId.name}</p>
                  </div>

                  <div>
                    <p>Time</p>
                    <p>
                      {show.date} {show.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="quantity">
                <TicketsQuantity></TicketsQuantity>
              </div>

              <div className="salon">
                <div className="showcase">
                  <div>
                    <p className="occupied"></p>
                    <p> N/A</p>
                  </div>

                  <div>
                    <p className="available"></p>
                    <p> Available</p>
                  </div>

                  <div>
                    <p className="selected"></p>
                    <p>Selected</p>
                  </div>
                </div>

                <Salon showId={showId} />
              </div>

              <div className="seats">
                <p className="heading">Selected Seats: </p>
                {selected.map((s, index) => (
                  <div className="selectedSeats" key={index}>
                    <p> R{s.row}-</p>
                    <p>S{s.seatNumber}</p>
                  </div>
                ))}
              </div>

              <div>
                {width < breakpoint ? (
                  <div className="cta">
                    {summaryOpen ? (
                      <p onClick={openSummary}>Hide Details</p>
                    ) : (
                      <p onClick={openSummary}>Show Details</p>
                    )}

                    {summaryOpen ? (
                      <div className="sum">
                        <TicketSum></TicketSum>
                      </div>
                    ) : null}

                    <div className="total">
                      <div>Total {totalSum},-</div>
                      <button onClick={() => addNewBooking(show)}>
                        MAKE RESERVATION
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bookingSum">
                    <div className="ticketSum">
                      <TicketSum></TicketSum>
                    </div>

                    <div className="total">
                      <p>Total</p>
                      <p>{totalSum},-</p>
                    </div>
                    <button
                      className="sumBtn"
                      onClick={() => addNewBooking(show)}
                    >
                      MAKE RESERVATION
                    </button>
                  </div>
                )}
              </div>
            </section>
          );
        }
      })}
    </div>
  );
};
export default BookingPage;
