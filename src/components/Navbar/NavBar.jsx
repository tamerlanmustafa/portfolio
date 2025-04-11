import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';

import resume from "../../assets/resumeTamerlanMustafa.pdf"

const NavBar = () => {


  return (
    <>
      <nav>
        <a href="/">Home</a>
        <div className="links">
          <a href='#about-me'>About me</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
          <div className="hidden">
            <a className='resume ' href={resume}>See my resume</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
