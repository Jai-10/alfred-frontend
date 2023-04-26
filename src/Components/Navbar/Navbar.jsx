import './Navbar.css'
import { Link } from 'react-router-dom'
import SiteLogo from '../../assets/site-logo.png'
import UserIcon from '../../assets/user-pfp.png'
import { useState } from 'react'

const Navbar = () => {

    const [navState, setNavState] = useState(false)
    const toggleNav = () => {
        setNavState(!navState)
    }


    return (
        <div className='nav-container'>
            <div className="nav-left">
                <Link to='/'> <img src={SiteLogo} alt="site-logo" /> </Link>
            </div>

            <div className="toggle-nav" onClick={toggleNav}>
                <i className='fa-solid fa-bars'></i>
            </div>

            <div className="nav-right"
                style={{
                    marginLeft: `${navState ? '0' : '-100%' }`
                }}
            >
                <ul className="nav-right-links">
                    <li className="nav-right-link"> <Link to='/services'> Services </Link> </li>
                    <li className="nav-right-link"> <Link to='/feedback'> Feedback </Link> </li>
                    <li className="nav-right-link"> <Link to='/login'> Login </Link> </li>
                    <li className="nav-right-link">
                        <Link to='/profile'> <img src={UserIcon} alt="site-logo" /> </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;