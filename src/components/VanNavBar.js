import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function VanNavBar() {
  return (
    <div className="d-flex align-items-center justify-content-between bg-light shadow px-4 py-3">
      <Link
        to="/"
        className="nav_brand text-decoration-none fw-bold text-primary h4 mb-0"
      >
        # Van Life
      </Link>

      <div className="dflex align-items-center justify-content-between">
        <Link
          to="/about"
          className="nav_item ms-3 text-dark text-decoration-none mb-0"
        >
          About
        </Link>
        <Link
          to="/vans"
          className="nav_item ms-3 text-dark text-decoration-none mb-0"
        >
          Vans
        </Link>
      </div>
    </div>
  );
}

export default VanNavBar;
