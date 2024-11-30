import React, { useState, useEffect } from "react";
import "./Simplify.css"; // Import the same CSS file

const Output = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(""); // You can set the file name from the backend response

  useEffect(() => {
    // Simulating fetching the image from the backend after the processing
    // This is where you would get the URL from the backend or the processed image directly
    // Replace with your backend URL or data
    fetch("/api/processed-image")
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
        setFileName("processed-image.png"); // Set a default name or get it from backend
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  const handleDownload = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = fileName; // Use the fileName to specify the downloaded image name
      link.click();
    }
  };

  const handleSave = () => {
    // Implement your save logic here. For example, saving the image to user's account.
    alert("Save feature is not implemented yet.");
  };

  return (
    <div className="sim-container">
      <div className="form-layout">
        <div className="form-container">
          <h1>Processed Image</h1>
          {image ? (
            <img src={image} alt="Processed Result" width="100%" height="auto" />
          ) : (
            <p>Loading image...</p>
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