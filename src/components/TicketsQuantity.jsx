import { useContext } from "react";

import { BookingContext } from "../context/BookingContext";

import "../scss/TicketsQuantity.scss";

const TicketsQuantity = (props) => {
  const {
    price,
    totalTickets,
    setTotalTickets,
    setTotalSum,
    selected,
  } = useContext(BookingContext);

  const handleIncrease = (index) => {
    const addTickets = [...totalTickets];
    addTickets[index].quantity++;
    setTotalTickets(addTickets);

    calculateTotal();
  };

  const handleDecrease = (index) => {
    const addTickets = [...totalTickets];
    if (addTickets[index].quantity > 0) {
      addTickets[index].quantity--;
      selected.pop();
    }

    setTotalTickets(addTickets);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalPrice = totalTickets.reduce((total, ticket) => {
      if (ticket.ticketType === "Senior") {
        return total + ticket.quantity * price * 0.8;
      }
      if (ticket.ticketType === "Children") {
        return total + ticket.quantity * price * 0.7;
      } else {
        return total + ticket.quantity * price;
      }
    }, 0);

    setTotalSum(Math.round(totalPrice));
  };

  return (
    <div className="ticketsCounterWrapper">
      {totalTickets.map((type, index) => (
        <div key={index} className="flex counter">
          <p>{type.ticketType}</p>
          <div className="flex">
            <span onClick={() => handleDecrease(index)}>-</span>
            <span>{type.quantity}</span>
            <span onClick={() => handleIncrease(index)}>+</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketsQuantity;
