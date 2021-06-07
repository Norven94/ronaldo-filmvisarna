import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";
import { BookingContext } from "../context/BookingContext";
import "../scss/BookingConfirmationPage.scss";
import ConfirmationTicket from "../components/ConfirmationTicket";
import ConfirmationTicketSmall from "../components/ConfirmationTicketSmall";

const BookingConfirmationPage = () => {
    const { currentUser } = useContext(UserContext);
    const { confirmationDetails } = useContext(BookingContext);

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 992;

    const calculatePrice = (ticketType, price) => {
        if (ticketType === "Children") return price * 0.7 + "kr";
        if (ticketType === "Senior") return price * 0.8 + "kr";
        return price + "kr";
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return window.removeEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const history = useHistory();

    //Reroute guard checks if you're logged in but only after whoami check.
    useEffect(() => {
        if (currentUser === undefined || confirmationDetails === null) history.push("/")
    }, [currentUser, confirmationDetails]) //eslint-disable-line

    return (
        <div>
            {confirmationDetails &&
                <div className="bookingConfirmation">
                    <h1>Booking confirmation</h1>
                    <h2>Payment is still required at the Filmvisarna theatre.</h2>
                    <h2>You can view your bookings  under “Bookings” in the user tab.</h2>
                    {confirmationDetails && width >= breakpoint &&
                        confirmationDetails[0].tickets.map((ticket, index) => (
                            <ConfirmationTicket ticketDetails={ticket} showDetails={confirmationDetails[1]} calculatePrice={calculatePrice} key={index} />
                        ))}

                    {confirmationDetails && width < breakpoint &&
                        confirmationDetails[0].tickets.map((ticket, index) => (
                            <ConfirmationTicketSmall ticketDetails={ticket} showDetails={confirmationDetails[1]} calculatePrice={calculatePrice} key={index} />
                        ))}
                </div>
            }
        </div>
    );
}

export default BookingConfirmationPage;