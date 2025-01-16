import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './Hero.css';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Projects from '../Projects/Projects.jsx';
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';

const Hero = () => {
    const location = useLocation(); 

    
    useEffect(() => {
        if (location.pathname === '/') { 
            const currentScrollY = window.scrollY; 
            sessionStorage.setItem('scrollPosition', currentScrollY); 
        }
    }, [location]);

    
    useEffect(() => {
        const savedScrollY = sessionStorage.getItem('scrollPosition'); 
        if (savedScrollY) {
            window.scrollTo(0, parseInt(savedScrollY, 10)); 
            sessionStorage.removeItem('scrollPosition'); 
        }
    }, [location]); 

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <section className="hero">
                <h1>Tamerlan Mustafa</h1>
                <p>Frontend Developer</p>
                <a href="https://github.com/TamerlanMustafayev" target="_blank" rel="noopener noreferrer">Github</a>
            </section>
            <hr />
            <AboutMe />
            <hr />
            <Projects />
            <hr />
            <Contact />
            <hr />
            <Footer />
        </>
    );
};

export default Hero;
