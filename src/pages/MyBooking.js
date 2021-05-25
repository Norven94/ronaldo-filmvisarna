import { useContext } from "react";

import {UserContext} from '../context/UserContext' ;
import {BookingContext} from '../context/BookingContext' ;

const MyBooking = () => {

    const { bookings } = useContext(BookingContext);
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    console.log(bookings);
    return ( 
    
    <div>
        {bookings && bookings.map((booking) => (
            <div>{booking}</div>
        ))}
        
        <h3>Your bookings</h3>
        
        
       <h3>Old bookings</h3>
    </div> 
    
    );
}
 
export default MyBooking;