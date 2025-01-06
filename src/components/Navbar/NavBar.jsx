import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';

const NavBar = () => {
  const [eyeRotations, setEyeRotations] = useState([0, 0]); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = document.querySelectorAll('.eye');
      if (eyes.length < 2) return;

      const eyePositions = Array.from(eyes).map((eye) => {
        const x = eye.offsetLeft + eye.offsetWidth / 2;
        const y = eye.offsetTop + eye.offsetHeight / 2;
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;
        return rot;
      });

      setEyeRotations(eyePositions);
    };

    const moveArea = document.querySelector('body');
    if (moveArea) {
      moveArea.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (moveArea) {
        moveArea.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <nav>
        <div className='container'>
          <div
            className='eye'
            style={{ transform: `rotate(${eyeRotations[0]}deg)` }}
          ></div>
          <div
            className='eye'
            style={{ transform: `rotate(${eyeRotations[1]}deg)` }}
          ></div>
        </div>
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
