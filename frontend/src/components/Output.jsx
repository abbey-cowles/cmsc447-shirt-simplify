import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import Axios from "axios";
import "./Output.css";

const Output = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const { user } = useUser();
  const userEmail = user?.email || "Guest";

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "processed-image.png";
      link.click();
    }
  };

  const handleSave = () => {
    if (userEmail !== "Guest") {
      Axios.post("http://localhost:8081/saved", { email: userEmail, image: imageUrl })
        .then((response) => {
          if (response.data.success) {
            alert("Image saved successfully!");
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error saving image:", error);
          alert("Failed to save image.");
        });
    } else {
      alert("Please log in to save images.");
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="output-container">
      <div className="image-section">
        <h1 className="section-title">Processed Image</h1>
        {imageUrl ? (
          <img src={imageUrl} alt="Processed Result" className="output-image" />
        ) : (
          <p className="no-image-message">No image found. Please try again.</p>
        )}
      </div>

      <div className="action-section">
        <h2 className="section-title">Actions</h2>
        <div className="action-buttons">
          <button className="action-button" onClick={handleDownload}>
            Download Image
          </button>
          <button className="action-button" onClick={handleSave}>
            Save Image
          </button>
        </div>
        <div className="go-home-link">
          <button className="link-button" onClick={handleGoHome}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Output;