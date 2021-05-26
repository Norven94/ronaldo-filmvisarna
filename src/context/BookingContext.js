import { createContext, useState, useEffect, useContext } from "react";
import {UserContext} from '../context/UserContext' ;

export const BookingContext = createContext();

const BookingProvider = (props) => {

    const { currentUser } = useContext(UserContext);
    const [bookingsId, setBookingsId]= useState([]);
    

    useEffect(() => {
        if( currentUser) {
            setBookingsId(currentUser.bookings)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    




    const getMyBookings = async () => {
        
    }

    const addBookingToUser = async () => {

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
        bookingsId,
        deleteBooking,
        getMyBookings,
        addBookingToUser
    }

    return (
        <BookingContext.Provider value={values}>
            {props.children}
        </BookingContext.Provider>
    );

}

export default BookingProvider ;