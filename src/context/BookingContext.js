// START

import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const BookingContext = createContext();

const BookingProvider = (props) => {
  const [seatingMap, setSeatingMap] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userBookingsNew, setUserBookingsNew] = useState([]);
  const [userBookingsOld, setUserBookingsOld] = useState([]);
  const [booked, setBooked] = useState([]);
  const [selected, setSelected] = useState([]);
  const [bookingsId] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [totalSum, setTotalSum] = useState(0);
  const [price, setPrice] = useState();
  const [totalTickets, setTotalTickets] = useState([
    { ticketType: "Ordinary", quantity: 0 },
    { ticketType: "Senior", quantity: 0 },
    { ticketType: "Children", quantity: 0 },
  ]);

  const [confirmationDetails, setConfirmationDetails] = useState("");
  const [amountOfTickets, setAmountOfTickets] = useState(0);

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
    setUserBookings(bookingsData);
  };

  useEffect(() => {
    if (userBookings.length !== 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      today = formatDate(today);
      setUserBookingsOld(
        userBookings.bookings.filter((booking) => {
          return booking.showId.date < formatDate(today);
        })
      );

      setUserBookingsNew(
        userBookings.bookings.filter((booking) => {
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
    let updatedUser = await fetch(`/api/v1/users/add/${currentUser._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBookingInfo),
    });
    updatedUser = await updatedUser.json();
    return updatedUser;
  };

  const getBookedSeats = async (showId) => {
    let booked = await fetch(`/api/v1/salons/booked/${showId}`);
    booked = await booked.json();
    setBooked(booked);
  }

  //Set Local storage to remember last booking
  useEffect(() => {
    if (confirmationDetails) localStorage.setItem("lastBooking", JSON.stringify([...confirmationDetails, currentUser]));
  }, [confirmationDetails, currentUser]);

  //Get from Local storage on hard reload and when user updates.
  useEffect(() => {
    let storageItem = JSON.parse(localStorage.getItem("lastBooking"));
    if(currentUser) {
      // eslint-disable-next-line eqeqeq
      if (currentUser.bookings.length != 0 && !confirmationDetails && storageItem && currentUser._id == storageItem[2]._id) {
        setConfirmationDetails([storageItem[0], storageItem[1]]);
      }
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

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
    amountOfTickets, 
    setAmountOfTickets,

    price,
    setPrice,
    addBookingToUser,
    confirmationDetails,
    setConfirmationDetails,
    getBookedSeats,
    formatDate
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
