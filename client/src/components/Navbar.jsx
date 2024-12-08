import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">
          Bluesky
        </Link>
        <div>
          <Link to="/auth" className="navbar-link">
            Log In
          </Link>
          <Link to="/auth" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
