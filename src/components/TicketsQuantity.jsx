import { useContext } from "react";

import { BookingContext } from "../context/BookingContext";

import "../scss/TicketsQuantity.scss";

const TicketsQuantity = () => {
  const { totalTickets, setTotalTickets, totalSum, setTotalSum } = useContext(
    BookingContext
  );

  return <div>Tickets Quantity</div>;
};

export default TicketsQuantity;
