import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../scss/RegisterPage.scss"

const RegisterPage = () => {
    const {registerError, setRegisterError, registerUser} = useContext(UserContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let newUserInfo = {};
        document.querySelectorAll("input").forEach(field => {
            newUserInfo[field.name] = field.value;
        })

        registerUser(newUserInfo);
    }

    return (
        <div className="registerPage">
            <h1>Register account</h1>
            <form action="submit" onSubmit={registerSubmitHandler}>
                <label htmlFor="registerName">Full name:</label>
                <input type="text" id="registerName" name="name" required />
                <label htmlFor="registerEmail">E-mail:</label>
                <input type="email" id="registerEmail" name="email" required onChange={()=>setRegisterError(false)} />
                <label htmlFor="registerPassword">Password:</label>
                <input type="text" id="registerPassword" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$" required />
                <p>8-24 letters. At least one lower case, one upper case letter, one number, one special character.</p>
                {registerError && <p className="error">User with that email already exists.</p>}
                <button>Create account</button>
            </form>
        </div>
    );
}

export default RegisterPage;