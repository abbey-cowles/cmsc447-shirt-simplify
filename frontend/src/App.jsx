import "./App.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Simplify from "./components/Simplify";
import Help from "./components/Help";
import Feedback from "./components/Contact";
import Signup from "./components/Signup";
import Output from "./components/Output";

const App = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src="" className="logo" alt="Logo" />
          <h1 className="company-name">Shirt Simplify</h1>
        </div>
        <div className="dropdown">
          <button>Menu</button>
          <div className="dropdown-content">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/signin")}>Sign In</a>
            <a onClick={() => navigate("/simplify")}>Simplify</a>
            <a onClick={() => navigate("/contact")}>Contact Us</a>
            <a onClick={() => navigate("/help")}>Help</a>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/simplify" element={<Simplify />} />
        <Route path="/contact" element={<Feedback />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/output" element={<Output />} />
      </Routes>

      <footer className="footer">
        <p>
          &copy; 2024 Shirt Simplify. All rights reserved. Abbey, Alec,
          Jonathan, Wes
        </p>
        <Link to="#" className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </Link>
      </footer>
    </div>
  );
};

export default App;