import { useState, useContext } from "react"
import "../scss/MyBookings.scss";
import { BookingContext } from '../context/BookingContext';
import { UserContext } from '../context/UserContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const cross = <FontAwesomeIcon icon={faTimes} size={"2x"}/>;
const arrowDown = <FontAwesomeIcon icon={faChevronDown} size={"1x"}/>;
const arrowUp = <FontAwesomeIcon icon={faChevronUp} size={"1x"}/>;

export default function BookingCard (props) {
    const { deleteBooking } = useContext(BookingContext);
    const { currentUser } = useContext(UserContext);    
    const [moreDetails, setMoreDetails] = useState(false)    

    const removeBooking = (bookingId) => {
        deleteBooking(bookingId, currentUser._id)
    }

    const toggleMoreDetails = () => {
        setMoreDetails(!moreDetails);
    }

    return (
        <div className="bookingContainer">
            {console.log(props.booking)}
            <div className="bookingDescription">
                <h3>{props.booking.showId.movieId.title}</h3><span> - {props.booking.showId.date}</span>
                {props.old ? "" : <span className="removeBtn" onClick={() => removeBooking(props.booking._id)}>{cross}</span>}
                <p>{props.booking.showId.time}</p>
                <span className="moreDetails" onClick={toggleMoreDetails}>Details {moreDetails ? arrowUp : arrowDown}</span>
            </div>
            {moreDetails && 
            <div className="ticketDetailsBox">
                {props.booking.tickets.map((ticket, i) => (
                    <div key={i}>
                        <span className="ticketType">{ticket.ticketType}</span>
                        <p>Row {ticket.rowNumber} / Seat {ticket.seatNumber}</p>
                    </div>
                ))}
            </div>}               
        </div>
    )
}