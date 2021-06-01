import { useContext, useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RouteGuard = ({ component: Component, ...rest }) => {
    const { isAuth } = useContext(UserContext);

    return( 
        <Route {...rest} render={(props) => (
            isAuth === true ? <Component {...props} /> : <Redirect to='/' />
        )} />
    )
}

export default RouteGuard;
