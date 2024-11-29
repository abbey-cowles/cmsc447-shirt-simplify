import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/simplify"); // Redirect to the Simplify page
  };

  return (
    <div>
      <section className="hero">
        <h1>Welcome to Shirt Simplify</h1>
        <p>Turn Pricey T-Shirt Designs Affordable</p>
        <button className="cta-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </section>

      <section className="features">
        <h2>Our Key Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <img src="https://via.placeholder.com/100" alt="Simplify" />
            <h3>Simplify</h3>
            <p>Reduce colors of PDF/JPG/JPEG designs for cheaper printing.</p>
          </div>
          <div className="feature-item">
            <img src="https://via.placeholder.com/100" alt="Compare" />
            <h3>Compare</h3>
            <p>Find prices of design at different custom design sites.</p>
          </div>
          <div className="feature-item">
            <img src="https://via.placeholder.com/100" alt="Share" />
            <h3>Share</h3>
            <p>Download, save, and send simplified images.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;