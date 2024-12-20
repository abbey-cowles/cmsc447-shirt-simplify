import "./App.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useUser } from "./components/UserContext";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Simplify from "./components/Simplify";
import Help from "./components/Help";
import Feedback from "./components/Contact";
import Signup from "./components/Signup";
import Output from "./components/Output";
import UserProfile from "./components/UserProfile";

const App = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

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
          <img src="shirt_c.png" className="logo" alt="Logo" />
          <h1 className="company-name">Shirt Simplify</h1>
        </div>
        {user && (
          <div className="user-info">
            <p>Welcome, {user.email}!</p>
          </div>
        )}
        <div className="dropdown">
          <button> Menu </button>
          <div className="dropdown-content">
            <a onClick={() => navigate("/")}>Home</a>
            {!user && <a onClick={() => navigate("/signin")}>Sign In</a>}
            <a onClick={() => navigate("/simplify")}>Simplify</a>
            <a onClick={() => navigate("/contact")}>Contact Us</a>
            <a onClick={() => navigate("/help")}>Help</a>
            {user && (<a onClick={() => {navigate("/profile");}}>Profile</a>)}
            {user && (<a onClick={() => {setUser(null);navigate("/");}}>Log Out</a>)}
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
        <Route path="/profile" element={<UserProfile user={user} />} />
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