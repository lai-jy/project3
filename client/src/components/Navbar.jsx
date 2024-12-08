import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">
          Bluesky
        </Link>
        <div>
          <Link to="/auth?mode=login" className="navbar-link">
            Log In
          </Link>
          <Link to="/auth?mode=signup" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
