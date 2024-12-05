import { Link } from "react-router-dom"
import './Navbar.css'


const NavBar = () => {
    return (
        <>
            <nav>
                <Link to={'/'}> Home </Link>

                <div className="links">
                    <Link to={'/aboutme'}>About me</Link>
                    <Link to={'/allprojects'}> Projects</Link>
                    <Link to={'/contact'}> Contact </Link>
                </div>

            </nav>
        </>
    )
}

export default NavBar