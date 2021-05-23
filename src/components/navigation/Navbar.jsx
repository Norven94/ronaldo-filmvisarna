import { useState, useEffect } from "react";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

import "../../scss/navigation/Navbar.scss";


const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return <header>{width < breakpoint ? <NavMobile /> : <NavDesktop />}</header>;
};

export default Navbar;
