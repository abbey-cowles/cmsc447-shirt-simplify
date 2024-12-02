import React from "react";
import "./Help.css"; // Import the updated CSS file
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const handleGoContact = () => {
    navigate("/contact");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="title-container">
          {/* New container for the title and divider */}
          <h1 className="title">Help Center</h1>
        </div>
        <div className="faq">
          <h3>1. What is Shirt Simplify?</h3>
          <p>Shirt Simplify is an easy to use, quick solution for reducing custom t-shirt costs.
            It works by reducing your designs into fewer colors while maintaining original 
            structure and subject of image. The reduction of colors will cost less in production
            as most sites charge you per color printed.</p>

          <h3>2. How do I use Shirt Simplify?</h3>
          <p>It's very simple! Go to the 'Simplify' page which can be accessed in the navigation
             dropdown on the upper right of the screen. Upload the file of your design and select
             a number of colors to reduce your design into. Next, you wait for us to work out magic!
             A downloadable file will be given to you for upload into your custom shirt website of
             choice. That's it!
          </p>

          <h3>3. What type of image can I upload?</h3>
          <p> Any common file type such as: JPG, JPEG, PNG, HEIC, HEIF. The outputted file will be a 
            JPEG.
          </p>

          <h3>4. How do I save designs for later?</h3>
          <p>You must have an account with us if you'd like to save your designs. It's easy! Go to the
            'Sign Up' page, enter your information, and you're all set. As soon as you upload and output
            a design, you will be able to save it to your account.
          </p>
        </div>
        <div className="home-link">
        <button className="link" onClick={handleGoContact}>
          Contact
        </button>
      </div>
      </div>
    </div>
  );
};

export default Help;
