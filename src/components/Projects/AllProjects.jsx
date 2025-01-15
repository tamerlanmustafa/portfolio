import projectsList from './ProjectsDB/ProjectsDB'
import { Link } from 'react-router-dom'
import './AllProjects.css'

const AllProjects = () => {
    return (
        <div className='all-projects'>
            <Link to={'/'}>Back</Link>
            <ul className="all-projects-container">
                {
                    projectsList.map((project, index) => (
                        <li key={index} className="each-project-of-all">
                            <h4>{project.title}</h4>
                            <p>{ project.description}</p>
                            <div className="buttons-all">
                                <a target='_blank' href={project.demoLink}>Demo</a>
                                <a target='_blank' href={project.sourceCode}>Source</a>
                            </div>
                            <hr />  
                        </li>
                    ))
                }

            </ul>

        </div>)
        
}       

export default AllProjects