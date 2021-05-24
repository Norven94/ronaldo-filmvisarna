import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [loginError, setLoginError] = useState(false);


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
                }
            })
    }

    const logoutUser = () => {
        fetch("/api/v1/users/logout")
            .then(response => response.json())
        // .then(result => { console.log(result) })

        setCurrentUser(null);
    }



    const whoami = () => {
        fetch("/api/v1/users/whoami")
            .then(response => response.json())
            .then(result => setCurrentUser(result))
    }

    //Checks the session on hard reload and updates login status.
    useEffect(() => {
        whoami()
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
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;