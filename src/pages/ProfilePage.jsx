import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "../scss/ProfilePage.scss";

const ProfilePage = () => {
    const { currentUser, logoutUser } = useContext(UserContext);

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    const editSubmitHandler = (e) => {
        e.preventDefault();
        let editUserInfo = {};
        document.querySelectorAll("input").forEach(field => editUserInfo[field.name] = field.value);
    }

    return (
        <div className="profilePage">
            <div className="profileInfo">
                <div>
                    <h2 className="title">Profile of</h2>
                    <h2>{currentUser?.name}</h2>
                    <h3>{currentUser?.email}</h3>
                </div>
                <button className="logout" onClick={logoutUser}>Logout</button>
            </div>
            <hr />
            <div className="profileEdit">
                <h2>Edit information</h2>
                <form action="submit" onSubmit={editSubmitHandler}>
                    <label htmlFor="editName">Full name:</label>
                    <input type="text" id="editName" name="name" required defaultValue={currentUser?.name} />
                    <label htmlFor="editEmail">E-mail:</label>
                    <input type="email" id="editEmail" name="email" required defaultValue={currentUser?.email} />
                    <label htmlFor="editPassword">Password:</label>
                    <input type="text" id="editPassword" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$" required />
                    <p>8-24 letters. At least one lower case, one upper case letter, one number, one special character.</p>
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
