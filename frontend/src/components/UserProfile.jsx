import React, { useEffect, useState } from "react";
import { useUser } from "./UserContext";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
    const { user, setUser } = useUser();
    const [savedImages, setSavedImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null); // Logout functionality
        navigate('/');
    };

    const handleDownload = (imageUrl) => {
        return;
    };

    const handleDelete = (imageId) => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            Axios.post("http://localhost:8081/delete-image", { id: imageId })
                .then(() => {
                    setSavedImages(savedImages.filter((image) => image.id !== imageId));
                    alert("Image deleted successfully.");
                })
                .catch((error) => {
                    console.error("Error deleting image:", error);
                    alert("Failed to delete image.");
                });
        }
    };

    useEffect(() => {
        if (user?.email) {
          Axios.post('http://localhost:8081/get-saved', { email: user.email })
            .then((response) => {
              setSavedImages(response.data.images);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching saved images:", error);
              setLoading(false);
            });
        }
      }, [user?.email]);

    return (
        <div className="profile-page">
            <div className="profile-container">
            <div className="user-info-container">
                <div className="user-icon">
                <img
                    src="https://t3.ftcdn.net/jpg/06/97/73/52/360_F_697735299_qCHFHUfgJAHr8fq57fTI441VlqG2c1ND.jpg" // Placeholder for the user icon
                    alt="User Icon"
                    className="circle-icon"
                />
                </div>
                <div className="user-details">
                <h3>{user?.email}</h3>
                <button onClick={handleLogout} className="logout-btn">
                    Log Out
                </button>
                </div>
            </div>

            <div className="saved-images-container">
                    <h3>Saved Images</h3>
                    <div className="saved-images-list">
                        {loading ? (
                            <p>Loading saved images...</p>
                        ) : (
                            savedImages.length > 0 ? (
                                savedImages.map((image, index) => (
                                    <div key={index} className="saved-image-item">
                                        <img
                                            src={image.image} // Assuming `image.image` contains the URL
                                            alt={`Saved Image ${index + 1}`}
                                            className="saved-image"
                                        />
                                        <div className="saved-image-actions">
                                            <button onClick={() => handleDownload(image.image)} className="download-button">
                                                Download
                                            </button>
                                            <button onClick={() => handleDelete(image.id)} className="delete-button">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No saved images found.</p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;