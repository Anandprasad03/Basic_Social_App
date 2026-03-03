import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <h2 className="logo">MySocial</h2>

        <ul className="nav-links">
          <li><Link to="/">Create Post</Link></li>
          <li><Link to="/feed">Feed</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;