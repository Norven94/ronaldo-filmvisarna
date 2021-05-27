import { useContext, useEffect } from "react";
import { BookingContext } from '../context/BookingContext';
import { UserContext } from '../context/UserContext';

const MyBooking = () => {
    const { userBookings, userBookingsOld, getMyBookings } = useContext(BookingContext);
    const { currentUser } = useContext(UserContext);
    console.log(currentUser)

    useEffect(() => {
        if (currentUser) {
            getMyBookings(currentUser._id)
        }
    }, [currentUser]) //eslint-disable-line

    let newBookings;

    if (userBookings ) {
        newBookings = (
            <div>
                <h3>Your bookings</h3>
                {userBookings.bookings.map((booking, i) => (
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
        newBookings = (
            <div>
                <span>No content</span>
            </div>
        )
    }

    let oldBookings;
    if (userBookingsOld) {
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
                <span>No content</span>
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