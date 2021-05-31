import { useContext, useEffect } from "react";
import { BookingContext } from '../context/BookingContext';
import { UserContext } from '../context/UserContext';
import BookingCard from "../components/BookingCard";

import "../scss/MyBookings.scss";

const MyBooking = () => {
    const { userBookingsOld, userBookingsNew, getMyBookings } = useContext(BookingContext);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser) {
            getMyBookings(currentUser._id)
        }
    }, [currentUser]) //eslint-disable-line    

    let newBookings;
    if (userBookingsNew.length !== 0) {
        newBookings = (
            <div className="currentBookings">
                <h2>Your bookings</h2>
                {userBookingsNew.map((booking, i) => (
                    <BookingCard booking={booking} key={i} />
                ))}
            </div>
        )
    } else {
        newBookings = (
            <div className="noBookings">
                <h2>Your bookings</h2>
                <p>You don't have any upcoming bookings</p>
            </div>
        )
    }

    let oldBookings;
    if (userBookingsOld.length !== 0) {
        oldBookings = (
            <div>
                <h2>Old bookings</h2>
                {userBookingsOld.map((booking, i) => (
                    <BookingCard booking={booking} key={i} old={true} />
                ))}
            </div>
        )
    } else {
        oldBookings = (
            <div className="noBookings">
                <h2>Old bookings</h2>
                <p>You dont have any old bookings registered</p>
            </div>
        )
    }

    return (
        <div className="bookings">
            {newBookings}
            {oldBookings}
        </div>
    );
}

export default MyBooking;