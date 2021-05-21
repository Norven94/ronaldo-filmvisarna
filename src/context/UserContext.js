import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [registerError, setRegisterError] = useState(false);

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
            .then(result => { console.log(result) });

        setCurrentUser(null);
    }

    const registerUser = (newUserInfo) => {
        fetch("/api/v1/users/register", {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(newUserInfo),
        })
            .then(response => response.json())
            .then(result => {
                if (result.hasOwnProperty("error")) {
                    setRegisterError(true)
                } else {
                    setCurrentUser(result.currentUser)
                    setRegisterError(false)
                }
            })
    }

    const values = {
        currentUser,
        setCurrentUser,
        showLogin,
        setShowLogin,
        loginUser,
        logoutUser,
        registerUser,
        loginError,
        setLoginError,
        registerError,
        setRegisterError,
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;