import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/" onClick={closeNav}>
          FlickHub
        </Link>

        <div className="d-lg-none d-flex gap-2">
          <Link to="/login" className="custom-btn btn btn-danger" onClick={closeNav}>
            Login
          </Link>
        </div>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNav}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/catalogue" onClick={closeNav}>
                Catalogue
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/news" onClick={closeNav}>
                News
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add-movie" onClick={closeNav}>
                Add Movie
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex gap-3">
          <Link to="/login" className="custom-btn btn btn-danger">
            Login
          </Link>
          <Link to="/register" className="custom-btn btn btn-danger">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}