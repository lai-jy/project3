import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [isSignUp, setIsSignUp] = useState(mode === "signup");

  useEffect(() => {
    setIsSignUp(mode === "signup");
  }, [mode]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? "/api/auth/signup" : "/api/auth/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (!isSignUp) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
      } else {
        alert("Sign up successful! Please log in.");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
        {isSignUp
          ? "Already have an account? Log In"
          : "Need an account? Sign Up"}
      </p>
    </div>
  );
};

export default Auth;
