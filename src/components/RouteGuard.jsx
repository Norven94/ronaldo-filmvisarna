import { useContext, useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RouteGuard = ({ component: Component, ...rest }) => {
    const { currentUser, isAuth} = useContext(UserContext);
    console.log(isAuth)

    if (currentUser === undefined) {
        return null
    }

    return (
        <Route {...rest} render={(props) => {
            if (isAuth) {
                return <Component {...props} {...props} />
            } else {
                <Redirect to={{
                    pathname: "/",
                    state: {
                        from: props.location
                    }
                }} />
            }
        }} />
    )
}

export default RouteGuard;
