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
                        <p>With frontend coding experience prior to US Military Service, I transitioned directly into software engineering school afterward, driven by a commitment to continuous learning. I’m now seeking to leverage my experience in tech, eager to contribute to innovative projects that blend creativity with cutting-edge technology</p>
                    </div>

                    <div className="skills hidden">
                        <h4>Tech skill</h4>
                        <div className="tech-skills">
                            <ul>
                                <li className='hidden'>
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </li >
                                <li className='hidden'>
                                    <i className="fa-brands fa-sass"></i>
                                    <p>SASS</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-solid fa-paintbrush"></i>
                                    <p>Tailwind</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-brands fa-js"></i>
                                    <p>Javascript</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-brands fa-node"></i>
                                    <p>Node JS</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-brands fa-react"></i>
                                    <p>React</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-brands fa-python"></i>
                                    <p>Python</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-solid fa-database"></i>
                                    <p>MongoDB</p>
                                </li>
                                <li className='hidden'>
                                    <i className="fa-brands fa-github"></i>
                                    <p>Git</p>
                                </li>
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