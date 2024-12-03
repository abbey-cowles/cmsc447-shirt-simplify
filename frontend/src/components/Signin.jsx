import React, { useState } from "react";
import Axios from "axios";
import "./Scheme.css"; 
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    Axios.post("http://localhost:8081/signin", {email: email,password: password})
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
        }
        else if (response.data.success) {
          alert("Welcome back!");
          setUser({ email: email });
          navigate("/");
        } 
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        alert("Invalid email or password");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      <div className="sign-up-redirect">
        <p>Don't have an account?</p>
        <button
          onClick={() => (navigate("/signup") )}
          className="back-to-sign-in-button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signin;

