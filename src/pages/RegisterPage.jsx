import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ReactComponent as Eyecon } from "../assets/eyecon.svg"
import { ReactComponent as Eyeclosed } from "../assets/eyeclosed.svg"
import "../scss/RegisterPage.scss";

const RegisterPage = () => {
    const history = useHistory();
    const { setCurrentUser, setIsAuth, eyeconStateHandler } = useContext(UserContext);

    const [registerError, setRegisterError] = useState(false);
    const [registerConfirmation, setRegisterConfirmation] = useState(false);
    const [eyeconState, setEyeconState] = useState(false);
    const [counter, setCounter] = useState(4);
    const [ email, setEmail] = useState("");
    const [ name, setName] = useState("");
    const [ password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setRegisterError(false);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


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
                    setCurrentUser(result.user)
                    setRegisterError(false)
                    setRegisterConfirmation(true)
                    setTimeout(() => {
                        if (document.location.href.endsWith("/register")) history.push("/");
                    }, 5000)
                    setIsAuth(true)
                }
            })
    }

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let newUserInfo = {name, email, password};
        registerUser(newUserInfo);
    }

    //useEffect timer handler for confirmation message
    useEffect(() => {
        if (registerConfirmation) {
            let tempCount = counter;

            const timer = setInterval(() => {
                setCounter(tempCount - 1);
                tempCount--;
                if (tempCount === 0) clearInterval(timer)
            }, 1000)

            //Cancel interval loop on unmount.
            return () => {
                clearInterval(timer)
            }
        }
        // eslint-disable-next-line
    }, [registerConfirmation])

    return (
        <div className="registerPage">
            {registerConfirmation ?
                <div className="confirmationDiv">
                    <h1>Success!</h1>
                    <p>Your account is created and we logged you in.</p>
                    <p>Redirecting you to homepage in {counter} seconds.</p>
                </div>
                :
                <div>
                    <h1>Register account</h1>
                    <form action="submit" onSubmit={registerSubmitHandler}>
                        <label htmlFor="registerName">Full name:</label>
                        <input type="text" id="registerName" name="name" required onChange = { handleNameChange}/>
                        <label htmlFor="registerEmail">E-mail:</label>
                        <input type="email" id="registerEmail" name="email" required onChange={ handleEmailChange} />
                        <label htmlFor="registerPassword">Password:</label>
                        <div className="eyeconDiv">
                            <input type="password" id="registerPassword" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$" required onChange = {handlePasswordChange}/>
                            {eyeconState ? <Eyecon className="eyecon" onClick={() => eyeconStateHandler("password", false, setEyeconState, "registerPassword")} />
                                : <Eyeclosed className="eyecon" onClick={() => eyeconStateHandler("text", true, setEyeconState, "registerPassword")} />}
                        </div>
                        <p>8-24 letters. At least one lower case, one upper case letter, one number, one special character.</p>
                        {registerError && <p className="error">User with that email already exists.</p>}
                        <button>Create account</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default RegisterPage;