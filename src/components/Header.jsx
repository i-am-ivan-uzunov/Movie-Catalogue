import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="index.html">
            FlickHub
          </a>

          <div className="d-lg-none">
            <button
              type="button"
              className="custom-btn btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#BookingModal"
            >
              Login
            </button>
          </div>

          <div className="d-lg-none">
            <button
              type="button"
              className="custom-btn btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#BookingModal"
            >
              Login
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Story
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="menu.html">
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="news.html">
                  Our Updates
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <button
              type="button"
              className="custom-btn btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#BookingModal"
            >
              Reservation
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
