import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';

import resume from "../../assets/resumeTamerlanMustafa.pdf"

const NavBar = () => {


  return (
    <>
      <nav>
        <a href="/"><i class="fa-solid fa-house"></i></a>
        
        <div className="links">
          <a href='#about-me'>About me</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
          <a className='resume ' href={resume}>Resume</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
