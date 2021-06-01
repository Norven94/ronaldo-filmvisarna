import { useContext, useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RouteGuard = ({ component: Component, ...rest }) => {
    const { currentUser, setIsAuth, isAuth } = useContext(UserContext);
    let localStorageIsAuth = JSON.parse(localStorage.getItem('isAuth'));
    useEffect(() => {
        localStorageIsAuth = JSON.parse(localStorage.getItem('isAuth'));
        if (currentUser) {
            setIsAuth(true)
        } else {            
            setIsAuth(false)
        }        
    },[currentUser])
    
    console.log(localStorageIsAuth)

    return( 
        <Route {...rest} render={(props) => (
            localStorageIsAuth === true
                ? <Component {...props} />
                : isAuth === true ? <Component {...props} /> : <Redirect to='/' />
        )} />
    )
}

export default RouteGuard;