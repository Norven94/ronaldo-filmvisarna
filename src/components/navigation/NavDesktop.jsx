import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Login from "../Login";
import Links from "./NavLinks/Links";
import UserLinks from "./NavLinks/UserLinks";

import "../../scss/navigation/NavDesktop.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

const smiley = <FontAwesomeIcon icon={faSmile} />;

const NavDesktop = () => {
  const { showLogin, setShowLogin, currentUser, logoutUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  const loginButtonHandler = () => {
    setShowLogin(true);
    setOpen(false);
  };

  const logoutButtonHandler = () => {
    logoutUser();
  };

  const handleClickOutside = (e) => {
    if (ref?.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Unbind the event listener
    };
  }, [ref]);

  return (
    <div>
      <nav className="wrapper">
        <div className="logo">
          <Link to="/">FILMVISARNA</Link>
        </div>

        <Links activeClassName={"active"} className={"navItems"}></Links>

        {currentUser === "" ? <span>Loading...</span> : currentUser ? ( //If user is logged in this dropdown will show
          <div ref={ref} className="dropdown">
            <h3 onClick={() => setOpen(!open)}>
              {currentUser.name} {smiley}
            </h3>

            {open ? ( //Toggle Dropdown
              <UserLinks
                onClick={logoutButtonHandler}
                className={"dropdownContent"}
                btnName={"LOGOUT"}
                btnClassName={"logout"}
                linkHandler={() => setOpen(false)}
              ></UserLinks>
            ) : null}
          </div>
        ) : (
          //If user is logged out this button will show
          <button className={"login"} onClick={loginButtonHandler}>
            LOGIN
          </button>
        )}
      </nav>
      {showLogin && <Login />}
    </div>
  );
};

export default NavDesktop;
