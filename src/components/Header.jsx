import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const handleLogout = async () => {
    await logout();
    closeNav();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/" onClick={closeNav}>
          FlickHub
        </Link>

        <div className="d-lg-none d-flex gap-2">
          {user ? (
            <button
              onClick={handleLogout}
              className="custom-btn btn btn-danger"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="custom-btn btn btn-danger"
                onClick={closeNav}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="custom-btn btn btn-danger"
                onClick={closeNav}
              >
                Register
              </Link>
            </>
          )}
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
            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-movie" onClick={closeNav}>
                  Add Movie
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="d-none d-lg-flex gap-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="custom-btn btn btn-danger"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="custom-btn btn btn-danger">
                Login
              </Link>
              <Link to="/register" className="custom-btn btn btn-danger">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
