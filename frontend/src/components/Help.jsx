import React from "react";
import "./Help.css"; // Import the updated CSS file

const Help = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="title-container">
          {/* New container for the title and divider */}
          <h1 className="title">Help Center</h1>
        </div>
        <div className="faq">
          <h3>1. FAQ 1?</h3>
          <p>Answer to FAQ 1</p>

          <h3>2. FAQ 2?</h3>
          <p>Answer to FAQ 2</p>

          <h3>3. FAQ 3?</h3>
          <p>Answer to FAQ 3</p>

          <h3>4. FAQ 4?</h3>
          <p>Answer to FAQ 4</p>
        </div>
        <div className="feedback-link">
          <a href="/contact" className="link">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
