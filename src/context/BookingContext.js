import { createContext, useState, useEffect, useContext } from "react";
import {UserContext} from '../context/UserContext';

export const BookingContext = createContext();

const BookingProvider = (props) => {
    const { currentUser} = useContext(UserContext);
    const [bookings, setBookings]= useState([]);
    
    

    useEffect(() => {
        getUsersBookingList()
    });


    const addBookingToUser = async () => {
        await fetch(`/api/v1/users/add${currentUser.id}` , {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify()
        });
    }

    const getUsersBookingList = async (userId) => {
        userId = currentUser._id ;
        let bookingList = await fetch(`/api/v1/users/booking/${userId}`);
        setBookings(bookingList);
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
        deleteBooking,
        getUsersBookingList,
        addBookingToUser
    }

    return (
        <BookingContext.Provider value={values}>
            {props.children}
        </BookingContext.Provider>
    );

}

export default BookingProvider ;