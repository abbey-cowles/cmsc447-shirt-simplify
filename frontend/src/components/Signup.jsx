import React, { useState } from "react";
import Axios from "axios";
import "./Scheme.css";
import { useUser } from "./UserContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send a POST request to the server with the form data
    Axios.post("http://localhost:8081/signup", {email: email,password: password,})
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
        } 
        else if (response.data.success) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
          setUser({ email: email });
          window.location.href = "/"; // Redirect to sign-in page
        }
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error during sign-up:", error);
        alert("An error occurred. Please try again.");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="sign-up-container">
      <h1>Create an Account</h1>
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
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
      <div className="sign-in-redirect">
        <p>Already have an account?</p>
        <button
          onClick={() => (window.location.href = "/signin")}
          className="back-to-sign-in-button"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signup;
