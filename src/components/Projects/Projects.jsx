import './Projects.css'
import projectsList from './ProjectsDB/ProjectsDB'

const Projects = () => {

    

    return (
        <>
            <section className="projects hidden">
                <h1>Projects</h1>   
                <div className="projects-container">
                    {
                        projectsList.map((project, index) => (
                            <div id={index} className="each-project">
                                <h4>{project.title}</h4>
                                <p>{ project.description}</p>
                                <img src={project.image} alt="" />
                                <a href={project.demoLink}>Demo</a>
                                <a href={project.sourceCode}>Source</a>
                            </div>
                        ))
                    }
                </div>
            </section>
        
        </>
    )
}

export default Projects

