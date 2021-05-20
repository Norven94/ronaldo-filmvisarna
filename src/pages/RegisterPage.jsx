import "../scss/RegisterPage.scss"

const RegisterPage = () => {

    const registerSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="registerPage">
            <h1>This is register page.</h1>
            <form action="submit" onSubmit={registerSubmitHandler}>
                <label htmlFor="registerEmail">E-mail:</label>
                <input type="email" id="registerEmail" required />
                <label htmlFor="registerPassword">Password:</label>
                <input type="text" id="registerPassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$" required />
                <p>8-24 letters. At least one lower case, one upper case letter, one number, one special character.</p>
                <button>Create account</button>
            </form>
        </div>
    );
}

export default RegisterPage;