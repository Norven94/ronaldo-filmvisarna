import "../scss/Footer.scss";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social">
          <Link to="/">FACEBOOK | </Link>
          <Link to="/">INSTAGRAM | </Link>
          <Link to="/">TWITTER | </Link>
          <Link to="/">MAIL </Link>
        </div>
        <div className="copyright">
          <p>Filmvisarna &copy; 2021</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
