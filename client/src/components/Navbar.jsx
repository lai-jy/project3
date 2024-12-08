import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/auth">Log In</Link>
          <Link to="/auth">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
