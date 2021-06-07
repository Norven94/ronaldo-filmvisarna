import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showLogin, setShowLogin] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const loginUser = (loginInfo) => {
        fetch("/api/v1/users/login", {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(loginInfo),
        })
            .then(response => response.json())
            .then(result => {
                if (result.hasOwnProperty("error")) {
                    setLoginError(true)
                } else {
                    setCurrentUser(result.currentUser)
                    setLoginError(false)
                    setShowLogin(false)
                    setIsAuth(true)
                }
            })
    }

    const logoutUser = () => {
        fetch("/api/v1/users/logout")
            .then(response => response.json())
        // .then(result => { console.log(result) })        
        setCurrentUser(null);
        setIsAuth(false)
    }

    const whoami = () => {
        fetch("/api/v1/users/whoami")
            .then(response => response.json())
            .then(result => {
                setCurrentUser(result)
                if (result) {
                    setIsAuth(true)
                }
            })
    }

    const eyeconStateHandler = (type, state, setState, elementId) => {
        setState(state);
        document.getElementById(elementId).type = type;
      }

    //Checks the session on hard reload and updates login status.
    useEffect(() => {
        whoami()
        console.log(isAuth)
    }, [])

    const values = {
        currentUser,
        setCurrentUser,
        showLogin,
        setShowLogin,
        loginUser,
        logoutUser,
        whoami,
        loginError,
        setLoginError,
        eyeconStateHandler,
        isAuth, 
        setIsAuth
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;