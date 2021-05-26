import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../context/UserContext";

const OrderConfirmationPage = () => {
    const { currentUser } = useContext(UserContext);
    const history = useHistory();

    //Reroute guard checks if you're logged in but only after whoami check.
    useEffect(() => {
        if (currentUser === null) history.push("/")
        // eslint-disable-next-line
    }, [currentUser])

    return (
        <div className="orderConfirmation">

        </div>
    );
}

export default OrderConfirmationPage;