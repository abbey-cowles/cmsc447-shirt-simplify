import React, { useState } from "react";
import "./Scheme.css"; // Import the same CSS for styling

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Email:", email);
    console.log("Password:", password);

    // Simulate a successful sign-in (replace this with actual authentication logic)
    const isSuccess = true; // You can replace this with real authentication logic

    if (isSuccess) {
      // Redirect to the home page after successful sign-in
      navigate("/"); // The path here is the home page route
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in-container">
      <h1>Contact Us</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button type="submit" className="sign-in-button">
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default Feedback;
