import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

const BookingProvider = (props) => {
  const [bookings, setBookings] = useState([]);
  const [totalTickets, setTotalTickets] = useState([
    { name: "Ordinary", quantity: 0 },

    { name: "Children", quantity: 0 },

    { name: "Senior", quantity: 0 },
  ]);

  const [totalSum, setTotalSum] = useState(0);

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

  const values = {
    bookings,
    deleteBooking,
    totalTickets,
    setTotalTickets,
    totalSum,
    setTotalSum,
  };

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
