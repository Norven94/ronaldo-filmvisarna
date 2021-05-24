import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        console.log(currentUser);
    },[currentUser]);

    return (
        <div className="profilePage">
            <div className="profileInfo">
    <h2>Profile of {currentUser.name}</h2>
            </div>
            <div className="profileEdit"></div>
        </div>
    );
};

export default ProfilePage;
