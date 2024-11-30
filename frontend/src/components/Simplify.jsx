import React, { useState } from "react";
import "./Simplify.css"; // Import the corresponding CSS file

const Simplify = () => {
  const [file, setFile] = useState(null);
  const [numColors, setNumColors] = useState(""); // State for number of colors

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!numColors || numColors < 1 || !file) {
      alert("Please upload both an image and a number of colors");
      return;
    }

    // Handle form submission logic here (e.g., API call)
    //after, redirect to new page (output page) 
    window.location.href = "/output";

    console.log("Form submitted with values: ", {
      file,
      numColors
    });


  };

  return (
    <div className="sim-container">
      <div className="form-layout">
        <div className="form-container">
          <h1>Upload Your Image</h1>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"  // Allow multiple image types and PDFs
            onChange={handleFileChange}
            required
          />
          {file && (
            // Display the selected file
            file.type === "application/pdf" ? (
              <embed
                src={URL.createObjectURL(file)}
                type="application/pdf"
                width="100%"
                height="300px"
              />
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt="Selected"
                width="100%"
                height="auto"
              />
            )
          )}
        </div>

        <div className="grey-container">
          <h1>Simplify Your Design</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="numColors">Number of Colors:</label>
              <input
                type="number"
                id="numColors"
                value={numColors}
                onChange={(e) => setNumColors(Number(e.target.value))}
                min="0"
              />
            </div>
            <button type="submit" className="simplify-button">
              Simplify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Simplify;
