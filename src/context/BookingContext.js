import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

const BookingProvider = (props) => {
  const [seatingMap, setSeatingMap] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [booked, setBooked] = useState([
    { row: 2, seatNumber: 9 },
    { row: 4, seatNumber: 24 },
  ]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getMyBookings();
  });

  const getMyBookings = async () => {
    let data = await fetch("/api/v1/users/bookings");
    data = await data.json();
    setBookings(data);
  };

  const deleteBooking = async (bookingId) => {
    let result = await fetch(`/api/v1/users/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    });
    result = result.json();
    return result;
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

  const addBookingToUser = async (newShowId, currentUser) => {
    let result = await fetch(`/api/v1/users/add/${currentUser.id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newShowId),
    });
    result = await result.json();
    getMyBookings();
    return result;
  };

  const values = {
    bookings,
    deleteBooking,
    seatingMap,
    makeSeatingMap,
    selected,
    setSelected,
    booked,
    addBookingToUser,
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
