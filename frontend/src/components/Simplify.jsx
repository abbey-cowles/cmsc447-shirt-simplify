import React, { useState } from "react";
import "./Simplify.css"; // Import the corresponding CSS file

const Simplify = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [numColors, setNumColors] = useState(""); // State for number of colors

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!numColors || !pdfFile) {
      alert("Please upload both an image and a number of colors");
      return;
    }

    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted with values: ", {
      pdfFile,
      numColors
    });
  };

  return (
    <div className="sim-container">
      <div className="form-layout">
        <div className="form-container">
          <h1>Upload Your PDF</h1>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
          {pdfFile && (
            <embed
              src={URL.createObjectURL(pdfFile)}
              type="application/pdf"
              width="100%"
              height="300px"
            />
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
