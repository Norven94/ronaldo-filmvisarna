import { useContext } from "react";

import { BookingContext } from "../context/BookingContext";

import "../scss/TicketsQuantity.scss";

const TicketSum = (props) => {
  const {
    price,
    totalTickets,
    setTotalTickets,
    totalSum,
    setTotalSum,
    selected,
  } = useContext(BookingContext);

  const calculateTicketType = (type) => {
    if (type.ticketType === "Senior") {
      return type.quantity * price * 0.8;
    }
    if (type.ticketType === "Children") {
      return Math.round(type.quantity * price * 0.7);
    } else {
      return type.quantity * price;
    }
  };

  return (
    <div className="ticketSum">
      {totalTickets.map((type, index) => (
        <div key={index}>
          {type.quantity > 0 ? (
            <div className="ticketsOverview flex">
              <div className="quantity">
                <p>{type.quantity} x </p>
                <p> {type.ticketType}</p>
              </div>
              <div>
                <p>{calculateTicketType(type)},-</p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TicketSum;
