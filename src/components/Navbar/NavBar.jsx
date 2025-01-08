import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';

const NavBar = () => {


  return (
    <>
      <nav>
        <a href="/">Home</a>
        <div className="links">
          <a href='#about-me'>About me</a>
          <a href='#projects'>Projects</a>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
