import { createContext, useState, useEffect } from "react";
import fetch from 'node-fetch';

export const BookingContext = createContext();

const BookingProvider = (props) => {

    const [bookings, setBookings]= useState([]);

    useEffect(() => {
        getMyBookings()
    });

    const getMyBookings = async () => {
        let data = await fetch("/api/v1/users/bookings");
        data = await data.json();
        setBookings(data);
    }

    const deleteBooking = async (bookingId) => {
        let result = await fetch(`/api/v1/users/bookings/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify()
        });
        result = result.json();
        return result;
    }

    const values = {
        bookings,
        deleteBooking
    }

    return (
        <BookingContext.Provider value={values}>
            {props.children}
        </BookingContext.Provider>
    );

}

export default BookingProvider ;