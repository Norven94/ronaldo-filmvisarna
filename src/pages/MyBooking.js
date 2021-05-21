import { useContext } from "react";

// import {UserContext} from '../context/UserContext' ;
import {BookingContext} from '../context/BookingContext' ;

const MyBooking = () => {

    const { bookings } = useContext(BookingContext);
    // const { usersBooking } = useContext(UserContext);

    return ( <div>
        {bookings && bookings.map( booking => (
            <ul>
                <li>{booking.name}</li>
            </ul>
        ))}
    </div> );
}
 
export default MyBooking;