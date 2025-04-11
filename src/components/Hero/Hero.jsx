import { useEffect } from 'react';
import './Hero.css';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Projects from '../Projects/Projects.jsx';
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';

const Hero = () => {

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
                <p>Full-Stack Developer</p>
                <a href="https://github.com/TamerlanMustafayev" target="_blank" rel="noopener noreferrer">Github &#x1F517; </a>
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
