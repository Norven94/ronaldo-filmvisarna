// START

import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const BookingContext = createContext();

const BookingProvider = (props) => {
  const [seatingMap, setSeatingMap] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userBookingsNew, setUserBookingsNew] = useState([]);
  const [userBookingsOld, setUserBookingsOld] = useState([]);
  const [booked, setBooked] = useState([
    { row: 2, seatNumber: 9 },
    { row: 4, seatNumber: 24 },
  ]);
  const [selected, setSelected] = useState([]);
  const [bookingsId, setBookingsId] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [totalSum, setTotalSum] = useState(0);
  const [price, setPrice] = useState();
  const [totalTickets, setTotalTickets] = useState([
    { ticketType: "Ordinary", quantity: 0 },
    { ticketType: "Senior", quantity: 0 },
    { ticketType: "Children", quantity: 0 },
  ]);

  let today = new Date();

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const getMyBookings = async (userId) => {
    let bookingsData = await fetch(`/api/v1/users/bookings/${userId}`);
    bookingsData = await bookingsData.json();
    console.log(bookingsData);
    setUserBookings(bookingsData);
  };

  useEffect(() => {
    if (userBookings.length !== 0) {
      console.log(userBookings);
      today = formatDate(today);
      setUserBookingsOld(
        userBookings.bookings.filter((booking) => {
          return booking.showId.date < formatDate(today);
        })
      );

      setUserBookingsNew(
        userBookings.bookings.filter((booking) => {
          console.log(booking);
          return booking.showId.date >= formatDate(today);
        })
      );
    }
  }, [userBookings]); //eslint-disable-line

  const deleteBooking = async (bookingId, userId) => {
    await fetch(`/api/v1/users/${bookingId}/${userId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    getMyBookings(currentUser._id);
  };

  const makeSeatingMap = async (salonId) => {
    let rows = await fetch(`/api/v1/salons/${salonId}`);
    rows = await rows.json();

    let seatingMap = [];
    let currentSeatnumber = 1;

    for (let i = 0; i < rows.length; i++) {
      let row = [];

      // make a loop for every row create a seat object
      for (let k = 0; k < rows[i]; k++) {
        let seat = {
          row: i + 1,
          seatNumber: currentSeatnumber,
        };
        currentSeatnumber = currentSeatnumber + 1;
        row.push(seat);
      }
      seatingMap.push(row);
    }
    setSeatingMap(seatingMap);
  };

  const addBookingToUser = async (newBookingInfo) => {
    await fetch(`/api/v1/users/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBookingInfo),
    });
  };

  const values = {
    bookingsId,
    deleteBooking,
    getMyBookings,
    userBookings,
    userBookingsOld,
    userBookingsNew,
    seatingMap,
    makeSeatingMap,
    selected,
    setSelected,
    booked,
    setBooked,
    totalSum,
    setTotalSum,
    totalTickets,
    setTotalTickets,
    price,
    setPrice,
    addBookingToUser,
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
