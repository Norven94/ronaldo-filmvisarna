import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../scss/Login.scss";

const Login = () => {
    const { setShowLogin, loginUser } = useContext(UserContext);

    const submitLoginHandler = (e) => {
        e.preventDefault();
        const loginInfo = {
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value
        }
        loginUser(loginInfo);
    }

    const closeLogin = (e) => {
        if (e.target.className === `overlay`) {
            setShowLogin(false)
            // setLoginError(false)
        }
    }

    return (
        <div className="login" onClick={closeLogin}>
            <div className="overlay">
                <div className="loginDiv">
                    <h2>Login</h2>
                    <form action="submit" onSubmit={submitLoginHandler}>
                        <label htmlFor="loginEmail">E-mail:</label>
                        <input type="email" id="loginEmail" required />
                        <label htmlFor="loginPassword">Password:</label>
                        <input type="text" id="loginPassword" required />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;