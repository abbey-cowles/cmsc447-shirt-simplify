import React, { useState } from "react";
import "./Simplify.css"; // Import the corresponding CSS file

const Simplify = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [numColors, setNumColors] = useState(""); // State for number of colors
  const [budget, setBudget] = useState(""); // State for budget per item
  const [groupName, setGroupName] = useState(""); // State for group name

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!numColors && (!budget || !groupName)) {
      alert(
        "Please select either the number of colors or both budget per item and group name."
      );
      return;
    }

    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted with values: ", {
      pdfFile,
      numColors,
      budget,
      groupName,
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

            <div className="form-group">
              <label htmlFor="budget">Budget per Shirt:</label>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="groupName">Desired Design Website:</label>
              <select
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              >
                <option value="">None</option>
                <option value="Custom Ink">Custom Ink</option>
                <option value="RushOrderTees">RushOrderTees</option>
                <option value="Printful">Printful</option>
              </select>
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
