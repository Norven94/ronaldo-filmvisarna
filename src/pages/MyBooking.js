import { useContext } from "react";

import {UserContext} from '../context/UserContext' ;
import {BookingContext} from '../context/BookingContext' ;

const MyBooking = () => {

    const { bookings } = useContext(BookingContext);
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    return ( 
    
    <div>
        <p>{currentUser && currentUser.email}</p>
        
        <h3>Your bookings</h3>
        
        {bookings && bookings.map( booking => (
            <div>
                <div>{booking.name}</div>
            </div>
        ))}

       <h3>Old bookings</h3>
    </div> 
    
    );
}
 
export default MyBooking;