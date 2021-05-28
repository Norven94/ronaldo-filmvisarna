import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";
import { BookingContext } from "../context/BookingContext";
import "../scss/BookingConfirmationPage.scss";
import ConfirmationTicket from "../components/ConfirmationTicket";

const BookingConfirmationPage = () => {
    const { currentUser } = useContext(UserContext);
    const { confirmationDetails } = useContext(BookingContext);
    console.log("confirmation details: ", confirmationDetails)

    const history = useHistory();

    //Reroute guard checks if you're logged in but only after whoami check.
    useEffect(() => {
        if (currentUser === null) history.push("/")
        // eslint-disable-next-line
    }, [currentUser])

    return (
        <div className="bookingConfirmation">
            <h1>Booking confirmation</h1>
            <h2>Payment is still required at the Filmvisarna theatre.</h2>
            <h2>You can view your bookings  under “Bookings” in the user tab.</h2>
            {confirmationDetails && confirmationDetails.tickets.map((ticket, index) => (
                <ConfirmationTicket details={ticket} key={index}/>
            ))}
        </div>
    );
}

export default BookingConfirmationPage;