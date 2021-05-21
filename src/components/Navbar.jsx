import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "./Login";

const Navbar = () => {
    const { showLogin, setShowLogin, currentUser, logoutUser } = useContext(UserContext)

    const loginButtonHandler = () => {
        setShowLogin(true)
    }

    const logoutButtonHandler = () => {
        logoutUser()
    }

    return (
        <div>
            <h1>This is navbar</h1>
            {currentUser && <h1>You are now logged in!</h1>}
            {currentUser ? <button onClick={logoutButtonHandler}>Logout</button> : <button onClick={loginButtonHandler}>Login</button>}
            {showLogin && <Login />}
        </div>
    );
}

export default Navbar;