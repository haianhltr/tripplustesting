import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link
            to="/"
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
          >
            <img src="https://tripplus.ca/wp-content/uploads/2021/05/Drawing1.png" alt="" width="200px" height="70px" />
          </Link>
        </div>

        <div className="right">
          <div className="inside"></div>
          <Link
            to="/products"
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
          >
            <div className="menuItem">PRODUCTS</div>
          </Link>
          <Link
            to="/resources"
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
          >
            <div className="menuItem">RESOURCES</div>
          </Link>

          <div className="menuItem">REGISTER</div>

          <div className="menuItem">SIGNIN</div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
