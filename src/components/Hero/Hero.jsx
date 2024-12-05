import './Hero.css'
import AboutMe from '../AboutMe/AboutMe.jsx'

const Hero = () => {
    return (

        <>
            <section className='hero '>
                <h1>Tamerlan Mustafa</h1>
                <p>Frontend Developer</p>
                <a href="https://github.com/TamerlanMustafayev" target="_blank">Github</a>
            </section>       
            <hr />

            <AboutMe/>
        </>
    )
}

export default Hero