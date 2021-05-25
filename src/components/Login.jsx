import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ReactComponent as Eyecon } from "../assets/eyecon.svg"
import { ReactComponent as Eyeclosed } from "../assets/eyeclosed.svg"
import "../scss/Login.scss";

const Login = () => {
  const { showLogin, setShowLogin, loginUser, loginError, setLoginError, eyeconStateHandler } = useContext(UserContext);
  const history = useHistory();
  const [eyeconState, setEyeconState] = useState(false);

  const submitLoginHandler = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value,
    };
    loginUser(loginInfo);
  };

  const closeLogin = (e) => {
    if (e.target.className === `overlay`) {
      setShowLogin(false);
      setLoginError(false);
    }
  };

  const registerRouter = () => {
    setShowLogin(false);
    history.push("/register");
  };

  return (
    <div>
      {showLogin && (
        <div className="login" onClick={closeLogin}>
          <div className="overlay">
            <div className="loginDiv">
              <h2>Login</h2>
              <form action="submit" onSubmit={submitLoginHandler}>
                <label htmlFor="loginEmail">E-mail:</label>
                <input type="email" id="loginEmail" required onChange={() => setLoginError(false)} />
                <label htmlFor="loginPassword">Password:</label>
                <div className="eyeconDiv">
                  <input type="password" id="loginPassword" required onChange={() => setLoginError(false)} />
                  {eyeconState ? <Eyecon className="eyecon" onClick={() => eyeconStateHandler("password", false, setEyeconState, "loginPassword")} />
                    : <Eyeclosed className="eyecon" onClick={() => eyeconStateHandler("text", true, setEyeconState, "loginPassword")} />}
                </div>
                {loginError && <p className="error">Bad credentials</p>}
                <button>Login</button>
                <p className="register" onClick={registerRouter}>
                  Click <span>HERE</span> to register an account.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
