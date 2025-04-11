import { Link } from 'react-router-dom'
import './AboutMe.css'

import resume from   '../../assets/TamerlanMustafaResume.pdf'

const AboutMe = () => {

    return (
        <>
            <section id='about-me' className='about-me hidden'>
                <h3>About me</h3>
                <div className="my-info">
                    <div className="bio hidden">
                        <p>
                            
                            I am a full stack software engineer, seeking to leverage my experience in tech, eager to contribute to innovative projects that involves lots of problem-solving which is my favourite part about writing code.</p>
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

                    <div className="hidden">
                        <a className='resume ' href={resume}>See my resume</a>
                    </div>
                </div>
            </section>        
        </>
    )
}

export default AboutMe