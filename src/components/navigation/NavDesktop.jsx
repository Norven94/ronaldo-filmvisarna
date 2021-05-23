import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";

import Login from "../Login";
import Links from "./NavLinks/Links";
import UserLinks from "./NavLinks/UserLinks";

import "../../scss/navigation/NavDesktop.scss";

import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const smiley = <FontAwesomeIcon className="icon" icon={faSmile} />;

const NavDesktop = () => {
  const { showLogin, setShowLogin, currentUser, logoutUser } = useContext(
    UserContext
  );

  const [visible, setVisible] = useState(false);

  let visibility = "hide";

  if (visible) {
    visibility = "show";
  }
  
  // Functions
  const loginButtonHandler = () => {
    setShowLogin(true);
  };

  const logoutButtonHandler = () => {
    logoutUser();
  };

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navWrapper">
      <div className="logo">
        <NavLink to="/">FILMVISARNA</NavLink>
      </div>
      <Links className={"navItems"}></Links>
      {currentUser ? (
        <div className="dropdown">
          <h3 onMouseUp={toggleMenu}>
            {currentUser.name} {smiley}
          </h3>
          <UserLinks
            onMouseUp={toggleMenu}
            onClick={logoutButtonHandler}
            className={`${visibility} dropdownContent`}
            btnName={"LOGOUT"}
            btnClassName={"btn"}
          ></UserLinks>
        </div>
      ) : (
        <button className={"btn"} onClick={loginButtonHandler}>
          LOGIN
        </button>
      )}
      {showLogin && <Login />}
    </nav>
  );
};

export default NavDesktop;
