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
      console.log(props.price);
      return type.quantity * price;
    }
  };

  return (
    <div className="ticketSum">
      {totalTickets.map((type, index) => (
        <div key={index}>
          {type.quantity > 0 ? (
            <div className="flex ticketsOverview">
              <div className="quantity">
                <p>{type.quantity}</p>
                <p>{type.ticketType}</p>
              </div>
              <div>
                <p>{calculateTicketType(type)},-</p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
      <div className="flex total">
        <p>Total:</p>
        <p>{totalSum},-</p>
      </div>
    </div>
  );
};

export default TicketSum;
