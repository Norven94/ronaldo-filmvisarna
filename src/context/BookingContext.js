import { createContext, useState, useEffect, useContext } from "react";
import {UserContext} from '../context/UserContext' ;

export const BookingContext = createContext();

const BookingProvider = (props) => {
    const [seatingMap, setSeatingMap] = useState([]);
    const [bookings, setBookings]= useState([]);
    const [booked, setBooked] = useState([{ row: 2, seatNumber: 9 }, { row: 4, seatNumber: 24 }]);
    const [selected, setSelected] = useState([]);
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
        bookings,
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