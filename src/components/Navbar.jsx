import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav-main">
    <h2><Link to="/">my current status here</Link></h2>
      <ul className="Nav">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blogs</Link>
        </li>        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="#">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
