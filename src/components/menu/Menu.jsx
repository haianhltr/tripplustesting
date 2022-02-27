import "./menu.scss";
import { Link } from "react-router-dom";

//pass menuOpen and setMenuOpen
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/products">
            <p>Products</p>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
        <Link to="/resources">
          <p>Resources</p>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <p>Register</p>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <p>Sign In</p>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <p>Contact</p>
        </li>
      </ul>
    </div>
  );
}
