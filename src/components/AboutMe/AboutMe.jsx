import { Link } from 'react-router-dom'
import './AboutMe.css'


const AboutMe = () => {

    return (
        <>
            <section id='about-me' className='about-me hidden'>
                <h3>About me</h3>
                <div className="my-info">
                    <div className="bio hidden">
                        <p>
                            Hello! My name is Tamerlan, and I love creating things that live on the internet. My interest in web development started back in 2017 when I discovered how to change text on websites using 'inspect' — turns out that curiosity led me to learn more about HTML and CSS!
                            <br />
                            <br />
                            These days, my main focus is leveraging my experience in tech and contributing to innovative projects that involve a lot of problem-solving — my favorite part of writing code.
                            </p>
                    </div>

                    <div className="skills hidden">
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <div className="tech-skills">
                        <ul>
                            <li className="hidded"><span>HTML</span></li>
                            <li className="hidded"><span>CSS</span></li>
                            <li className="hidded"><span>JavaScript</span></li>
                            <li className="hidded"><span>SCSS</span></li>
                            <li className="hidded"><span>Tailwind</span></li>
                            <li className="hidded"><span>React</span></li>
                            <li className="hidded"><span>Node.js</span></li>
                            <li className="hidded"><span>EJS</span></li>
                            <li className="hidded"><span>Flask</span></li>
                            <li className="hidded"><span>Python</span></li>
                            <li className="hidded"><span>PostgreSQL</span></li>
                            <li className="hidded"><span>MongoDB</span></li>
                        </ul>

                           
                        </div>

                        
                    </div>

                    
                </div>
            </section>        
        </>
    )
}

export default AboutMe