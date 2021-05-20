import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState("test");
    const [showLogin, setShowLogin] = useState(false)

    const values = {
        currentUser,
        setCurrentUser,
        showLogin,
        setShowLogin
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;