import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Login from "../Login";
import Burger from "./Burger";
import Links from "./NavLinks/Links";
import UserLinks from "./NavLinks/UserLinks";

import "../../scss/navigation/NavMobile.scss";

const NavMobile = () => {
  const {showLogin, setShowLogin, currentUser, logoutUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const loginButtonHandler = () => {
    setShowLogin(true);
  };

  const logoutButtonHandler = () => {
    logoutUser();
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  let animateBurger = "";

  if (open) {
    animateBurger = "animate";
  }

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <Link to="/">FILMVISARNA</Link>
        </div>

        <Burger className={animateBurger} handleOnClick={toggleMenu} />

        {open ? (
          <div onClick={toggleMenu} className={"flyoutMenu"}>
            <Links activeClassName={"active"} className={"items"}></Links>
            {currentUser ? ( //If user is logged in this dropdown will show
              <UserLinks
                activeClassName={"active"}
                onClick={logoutButtonHandler}
                className={"items userItems"}
                btnName={"LOGOUT"}
                btnClassName={"btn"}
              ></UserLinks>
            ) : (
              //If user is logged out this menu will show will show
              <button className="btn" onClick={loginButtonHandler}>
                LOGIN
              </button>
            )}
          </div>
        ) : null}
      </nav>
      {showLogin && <Login />}
    </div>
  );
};

export default NavMobile;
