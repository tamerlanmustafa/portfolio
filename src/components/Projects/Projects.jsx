import { Link } from 'react-router-dom'
import './Projects.css'

import projectsList from './ProjectsDB/ProjectsDB'

const Projects = () => {

    

    return (
        <>
            <section id='projects' className="projects hidden">
                <h1>Selected projects</h1>   
                <div className="project-container">
                    {
                        projectsList.map((project, index) => (
                            (index === 0 || index === 1 || index === 2) ? (
                                <div key={index} className="each-project">
                                    <h4>{project.title}</h4>
                                    <p>{ project.description}</p>
                                    <div className="buttons">
                                        <a target='_blank' href={project.demoLink}>Demo</a>
                                        <a target='_blank' href={project.sourceCode}>Source</a>
                                    </div>
                                </div>
                            ) : null
                        ))
                    }

                </div>
                <Link className='link-to-all-projects' to={'/allprojects'}>See all projects</Link>
            </section>
        
        </>
    )
}

export default Projects

