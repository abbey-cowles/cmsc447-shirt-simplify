import React, { useState } from "react";
import "./Simplify.css"; // Import the corresponding CSS file
import axios from "axios";

const Simplify = () => {
    const [file, setFile] = useState(null);
    const [numColors, setNumColors] = useState(5); // Default number of colors
    const [modifiedImage, setModifiedImage] = useState(null); // For displaying the modified image

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file || numColors < 1) {
            alert("Please upload an image and select a valid number of colors.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("numColors", numColors); // Pass the number of colors to the backend

        try {
            const response = await axios.post("http://localhost:8081/upload", formData, {
                responseType: "blob", // To handle binary data
            });

            const modifiedImageURL = URL.createObjectURL(response.data);
            setModifiedImage(modifiedImageURL);
        } catch (error) {
            console.error("Error processing image:", error);
            alert("Failed to process the image.");
        }
    };

    return (
        <div className="sim-container">
            <div className="form-layout">
                <div className="form-container">
                    <h1>Upload Your Image</h1>
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileChange}
                        required
                    />
                    {file && (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Selected"
                            width="100%"
                            height="auto"
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
                                min="1"
                                required
                            />
                        </div>
                        <button type="submit" className="simplify-button">
                            Process Image
                        </button>
                    </form>
                </div>

                {modifiedImage && (
                    <div className="result-container">
                        <h2>Modified Image</h2>
                        <img src={modifiedImage} alt="Modified" width="100%" height="auto" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Simplify;
