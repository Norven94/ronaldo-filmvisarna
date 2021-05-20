import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../scss/Login.scss";

const Login = () => {
    const { setShowLogin } = useContext(UserContext);

    const loginClickHandler = () => {
        setShowLogin(false)
    }

    const submitLoginHandler = () => {

    }

    return (
        <div className="login" onClick={loginClickHandler}>
            <div className="overlay">
                <div className="loginDiv">
                    <h2>Log in</h2>
                    <form action="submit" onSubmit={submitLoginHandler}>
                        <label htmlFor="loginEmail">E-mail:</label>
                        <input type="email" id="loginEmail" required />
                        <label htmlFor="loginPassword">Password:</label>
                        <input type="text" id="loginPassword" required />
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;