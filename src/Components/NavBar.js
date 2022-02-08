import { Link } from 'react-router-dom'

const NavBar = () => {
  
    return (
        <div id="navbar">
            <Link to='/about' id="nav-link-about">About</Link>
            <Link to='/contact' id="nav-link-contact">Contact</Link>
            <Link to='/projects' id="nav-link-projects">Projects</Link>
        </div>
    )

}

export default NavBar