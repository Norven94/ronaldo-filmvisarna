import { useContext, useState, useEffect } from "react";

import { BookingContext } from "../context/BookingContext";

import "../scss/TicketsQuantity.scss";

const TicketsQuantity = () => {
  const { totalTickets, setTotalTickets, totalSum, setTotalSum } = useContext(
    BookingContext
  );

  let price = 100; // Temporary - This must change and price should come from booking context/current movie price

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
    }

    setTotalTickets(addTickets);

    calculateTotal();
  };

  const calculateTotal = () => {
    const totalPrice = totalTickets.reduce((total, ticket) => {
      if (ticket.name == "Senior") {
        return total + ticket.quantity * price * 0.8;
      }
      if (ticket.name == "Children") {
        return total + ticket.quantity * price * 0.7;
      } else {
        return total + ticket.quantity * price;
      }
    }, 0);

    setTotalSum(totalPrice);
  };

  const calculateTicketType = (type) => {
    if (type.name == "Senior") {
      return type.quantity * price * 0.8;
    }
    if (type.name == "Children") {
      return type.quantity * price * 0.7;
    } else {
      return type.quantity * price;
    }
  };

  const ticketsCounter = () => {
    return (
      <div>
        {totalTickets.map((type, index) => (
          <div key={index} className="ticketsCounter">
            <p>{type.name}</p>
            <div className="btnWrapper">
              <span onClick={() => handleDecrease(index)}>-</span>
              <span>{type.quantity}</span>
              <span onClick={() => handleIncrease(index)}>+</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ticketSum = () => {
    return (
      <div className="ticketSum">
        {totalTickets.map((type, index) => (
          <div key={index}>
            {type.quantity > 0 ? (
              <div className="ticketsOverview">
                <div className="quantity">
                  <p>{type.quantity}</p>
                  <p>{type.name}</p>
                </div>
                <div>
                  <p>{calculateTicketType(type)}</p>
                </div>
              </div>
            ) : null}
          </div>
        ))}
        <div>Total: {totalSum}</div>
      </div>
    );
  };

  return (
    <div className="tickets">
      {ticketsCounter()} {ticketSum()}
    </div>
  );
};

export default TicketsQuantity;