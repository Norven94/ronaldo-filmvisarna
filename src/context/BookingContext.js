import { createContext, useState, useEffect, useContext } from "react";

export const BookingContext = createContext();

const BookingProvider = (props) => {
    const [seatingMap, setSeatingMap] = useState([]);
    const [userBookings, setUserBookings]= useState();
    const [userBookingsOld, setUserBookingsOld]= useState();
    const [booked, setBooked] = useState([{ row: 2, seatNumber: 9 }, { row: 4, seatNumber: 24 }]);
    const [selected, setSelected] = useState([]);    
    const [bookingsId, setBookingsId]= useState([]);
    const today = new Date();

    const getMyBookings = async (userId) => {
        let bookingsData = await fetch(`/api/v1/users/bookings/${userId}`);
        bookingsData = await bookingsData.json();
        console.log(bookingsData)
        setUserBookings(bookingsData)
    }

    useEffect(() => {
        if (userBookings) {
            setUserBookingsOld(userBookings.bookings.filter(booking => {
                console.log(today)
                return booking.showId.date < today
            }))
        }                
    },[userBookings])

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

    const makeSeatingMap = async (salonId) => {        
        let rows = await fetch(`/api/v1/salons/${salonId}`);
        rows = await rows.json();

        let seatingMap = [];
        let currentSeatnumber = 1;

        for (let i = 0; i < rows.length; i++) {
            let row = []

            // make a loop for every row create a seat object
            for (let k = 0; k < rows[i]; k++) {
                let seat = {
                    row: i + 1,
                    seatNumber: currentSeatnumber
                }
                currentSeatnumber = currentSeatnumber + 1
                row.push(seat)
            }
            seatingMap.push(row)
        }
        setSeatingMap(seatingMap);
    };

    const values = {
        bookingsId,
        deleteBooking,
        getMyBookings,
        addBookingToUser,
        userBookings,
        userBookingsOld,
        seatingMap,
        makeSeatingMap,
        selected, 
        setSelected,
        booked
    }

    return (
        <BookingContext.Provider value={values}>
            {props.children}
        </BookingContext.Provider>
    );

}

export default BookingProvider ;