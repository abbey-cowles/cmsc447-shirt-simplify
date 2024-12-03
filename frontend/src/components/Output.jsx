import React from "react";
import { useLocation } from "react-router-dom";
import "./Simplify.css";

const Output = () => {
    const location = useLocation();
    const imageUrl = location.state?.imageUrl;

    const handleDownload = () => {
      if (imageUrl) {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "processed-image.png";
        link.click();
      }
    };

  const handleSave = () => {
    alert("Save feature is not implemented yet.");
  };

  return (
    <div className="sim-container">
      <div className="form-layout">
        <div className="form-container">
        <h1>Processed Image</h1>
            {imageUrl ? (
                <img src={imageUrl} alt="Processed Result" width="100%" height="auto" />
            ) : (
                <p>No image found. Please try again.</p>
            )}
        </div>

        <div className="grey-container">
          <h1>Actions</h1>
          <button className="simplify-button" onClick={handleDownload}>
            Download Image
          </button>
          <button className="simplify-button" onClick={handleSave}>
            Save Image
          </button>
          <div className="home-link">
          <a href="/" className="link">
            Go Home
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Output;