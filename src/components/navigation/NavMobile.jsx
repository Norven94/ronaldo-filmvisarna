import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";

import Login from "../Login";
import Burger from "./Burger";
import Links from "./NavLinks/Links";
import UserLinks from "./NavLinks/UserLinks";

import "../../scss/navigation/NavMobile.scss";

const NavMobile = () => {
  const { showLogin, setShowLogin, currentUser, logoutUser } = useContext(
    UserContext
  );

  const loginButtonHandler = () => {
    setShowLogin(true);
  };

  const logoutButtonHandler = () => {
    logoutUser();
  };

  const [visible, setVisible] = useState(false);

  let showMenu = "hide";
  let burger = "";

  if (visible) {
    showMenu = "show";
    burger = "show";
  }

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <NavLink to="/home">FILMVISARNA</NavLink>
        </div>

        <Burger className={burger} handleMouseUp={toggleMenu} />
        <div onMouseUp={toggleMenu} className={`${showMenu} flyoutMenu`}>
          {currentUser ? (
            <div onMouseUp={toggleMenu}>
              <Links activeClassName={"active"} className={"items"}></Links>
              <UserLinks
                activeClassName={"active"}
                onClick={logoutButtonHandler}
                className={"items userItems"}
                btnName={"LOGOUT"}
                btnClassName={"btn"}
              ></UserLinks>
            </div>
          ) : (
            <div onMouseUp={toggleMenu} className={`flyoutMenu ${showMenu}`}>
              <Links className={"items"}></Links>
              <button className="btn" onClick={loginButtonHandler}>
                LOGIN
              </button>
            </div>
          )}
        </div>
      </nav>
      <Login />
    </div>
  );
};

export default NavMobile;
