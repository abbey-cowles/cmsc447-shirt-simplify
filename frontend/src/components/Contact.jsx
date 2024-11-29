import React, { useState } from "react";
import Axios from "axios";
import "./Scheme.css"; // Import the same CSS for styling

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    Axios.post("http://localhost:8081/contact", {name: name, email: email, message: message })
      .then((response) => { 
        if (response.data.success) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
          setMessage("");
          window.location.href = "/";
        }
        else if (response.data.message){
          alert(response.data.message);
          setEmail("");
          setPassword("");
          setMessage("");
        }
      })
      .catch((error) => {
        console.error("Error sending feedback:", error);
      });

      setName("");
      setEmail("");
      setMessage("");
      
  };

  return (
    <div className="sign-in-container">
      <h1>Contact Us</h1>
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
      <div className="home-link">
          <a href="/" className="link">
            Go Home
          </a>
        </div>
    </div>
  );
};

export default Contact;
