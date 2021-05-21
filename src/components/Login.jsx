import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../scss/Login.scss";

const Login = () => {
    const { setShowLogin, loginUser, loginError, setLoginError } = useContext(UserContext);
    const history = useHistory();

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
            setLoginError(false)
        }
    }

    const registerRouter = () => {
        setShowLogin(false)
        history.push("/register")
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
                        {loginError && <p className="error">Bad credentials</p>}
                        <button>Login</button>
                        <p className="register" onClick={registerRouter}>Click <span>HERE</span> to register an account.</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;