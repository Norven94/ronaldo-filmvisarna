import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router";
import { ReactComponent as Eyecon } from "../assets/eyecon.svg"
import { ReactComponent as Eyeclosed } from "../assets/eyeclosed.svg"
import "../scss/ProfilePage.scss";

const ProfilePage = () => {
    const { currentUser, setCurrentUser, logoutUser, eyeconStateHandler } = useContext(UserContext);
    const history = useHistory();
    const [emailTaken, setEmailTaken] = useState(false);
    const [editSuccess, setEditSuccess] = useState(false);
    const [eyeconState, setEyeconState] = useState(false);

    const editUser = (editInfo) => {
        fetch(`/api/v1/users/update/${currentUser._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(editInfo),
        })
            .then(response => response.json())
            .then(result => {
                if (result.hasOwnProperty("error")) {
                    setEmailTaken(true)
                    document.getElementById("editEmail").classList.add("errorBorder");
                } else {
                    setCurrentUser(result)
                    renderSuccess()
                }
            })
    }

    const editSubmitHandler = (e) => {
        if (currentUser) {
            e.preventDefault();
            let editUserInfo = { userId: currentUser._id };
            document.querySelectorAll("input").forEach(field => editUserInfo[field.name] = field.value);

            editUser(editUserInfo);
        }
    }

    const removeErrors = () => {
        setEmailTaken(false);
        document.getElementById("editEmail").classList.remove("errorBorder");
    }

    const renderSuccess = () => {
        setEditSuccess(true);
        setTimeout(() => {
            setEditSuccess(false)
        }, 3000)
    }

    return (
        <div className="profilePage">
            <div className="profileInfo">
                <div>
                    <h2>Profile of <br /> {currentUser?.name}</h2>
                    <h3>{currentUser?.email}</h3>
                </div>
                <button className="logout" onClick={logoutUser}>Logout</button>
            </div>
            <div className="hr"></div>
            <div className="profileEdit">
                <h2 className="title">Edit information</h2>
                <form action="submit" onSubmit={editSubmitHandler}>
                    <label htmlFor="editName">Full name:</label>
                    <input type="text" id="editName" name="name" required defaultValue={currentUser?.name} />
                    <label htmlFor="editEmail">E-mail:</label>
                    <input type="email" id="editEmail" name="email" required defaultValue={currentUser?.email} onChange={removeErrors} />
                    {emailTaken && <p className="errorText">Email address already in use.</p>}
                    <label htmlFor="editPassword">Password:</label>
                    <div className="eyeconDiv">
                        <input type="password" id="editPassword" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$" required />
                        {eyeconState ? <Eyecon className="eyecon" onClick={() => eyeconStateHandler("password", false, setEyeconState, "editPassword")} />
                            : <Eyeclosed className="eyecon" onClick={() => eyeconStateHandler("text", true, setEyeconState, "editPassword")} />}
                    </div>
                    <p>8-24 letters. At least one lower case, one upper case letter, one number, one special character.</p>
                    {editSuccess ? <p className="editSuccess">Your information updated successfully!</p> : <button>Save</button>}
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
