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
    <nav className="navbar navbar-expand-lg bg-black navbar-dark border-bottom border-secondary shadow-lg sticky-top">
      <div className="container">
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link
          className="navbar-brand text-white fw-bold fs-4"
          to="/"
          onClick={closeNav}
        >
          FlickHub
        </Link>

        <div className="d-lg-none d-flex align-items-center gap-2">
          {user ? (
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={handleLogout}
                className="custom-btn btn btn-warning text-dark fw-bold btn-sm"
              >
                Logout
              </button>
              {user.user_metadata?.avatar_url && (
                <img
                  src={user.user_metadata.avatar_url}
                  alt="Avatar"
                  className="rounded-circle border border-warning"
                  style={{ width: "35px", height: "35px", objectFit: "cover" }}
                />
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="custom-btn btn btn-warning text-dark fw-bold btn-sm"
                onClick={closeNav}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="custom-btn btn btn-warning text-dark fw-bold btn-sm"
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
              <Link className="nav-link text-light" to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/catalogue" onClick={closeNav}>
                Catalogue
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link text-light" to="/add-movie" onClick={closeNav}>
                  Add Movie
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="d-none d-lg-flex align-items-center gap-3">
          {user ? (
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={handleLogout}
                className="custom-btn btn btn-warning text-dark fw-bold px-4"
              >
                Logout
              </button>
              {user.user_metadata?.avatar_url && (
                <img
                  src={user.user_metadata.avatar_url}
                  alt="Profile"
                  className="rounded-circle border border-warning shadow-sm"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  title={user.email}
                />
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="custom-btn btn btn-warning text-dark fw-bold px-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="custom-btn btn btn-warning text-dark fw-bold px-4"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}