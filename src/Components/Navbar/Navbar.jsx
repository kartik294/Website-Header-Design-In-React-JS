import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`hamburger-lines ${isMenuOpen ? "open" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Close Icon inside nav-menu */}
        {isMenuOpen && (
          <div className="close-icon" onClick={toggleMenu}>
            &times;
          </div>
        )}
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
