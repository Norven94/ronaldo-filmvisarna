import { useContext, useEffect } from "react";
import { BookingContext } from '../context/BookingContext';
import { UserContext } from '../context/UserContext';

const MyBooking = () => {
    const { userBookings, userBookingsOld, getMyBookings, deleteBooking } = useContext(BookingContext);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser) {
            getMyBookings(currentUser._id)
        }
    }, [currentUser]) //eslint-disable-line

    const removeBooking = (bookingId) => {
        deleteBooking(bookingId, currentUser._id)
    }

    let newBookings;

    console.log(userBookings)
    if (userBookings.length !== 0) {
        newBookings = (
            <div>
                <h3>Your bookings</h3>
                {userBookings.bookings.map((booking, i) => (                    
                    <div key={i}>
                        {console.log(booking)}
                        <span>{booking.showId.movieId.title} - {booking.showId.date}</span>
                        <p>{booking.showId.time}</p>
                        {booking.tickets.map((ticket, i) => (
                            <div key={i}>
                                <span>Row {ticket.rowNumber} / Seat {ticket.seatNumber}</span>
                            </div>
                        ))}
                        <button onClick={() => removeBooking(booking._id)}>Remove</button>
                    </div>
                ))}
            </div>
        )
    } else {
        newBookings = (
            <div>
                <h3>Your bookings</h3>
                <p>You don't have any upcoming bookings</p>
            </div>
        )
    }

    let oldBookings;
    console.log(userBookingsOld)
    if (userBookingsOld.length !== 0) {
        console.log(userBookingsOld)
        oldBookings = (
            <div>
                <h3>Old bookings</h3>
                {userBookingsOld.map((booking, i) => (
                    <div key={i}>
                        <span>{booking.showId.movieId.title} - {booking.showId.date}</span>
                        <p>{booking.showId.time}</p>
                        {booking.tickets.map((ticket, i) => (
                            <div key={i}>
                                <span>Row {ticket.rowNumber} / Seat {ticket.seatNumber}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    } else {
        oldBookings = (
            <div>
                <h3>Old bookings</h3>
                <p>You dont have any old bookings registered</p>
            </div>
        )
    }

    return (
        <>
        {newBookings}
        {oldBookings}
        </>
    );
}

export default MyBooking;