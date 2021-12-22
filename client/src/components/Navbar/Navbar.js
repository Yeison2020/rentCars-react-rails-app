import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topNavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          <img
            className="logo-image"
            src="https://img.icons8.com/ios-glyphs/30/000000/car-rental.png"
            alt="logo cars rentals"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="active">
              <NavLink className="nav-link mt" to="#">
                Learn more
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mt" to="#">
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mt" to="#">
                Sign up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                <img
                  className="user-logo"
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                  alt="user logo"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
