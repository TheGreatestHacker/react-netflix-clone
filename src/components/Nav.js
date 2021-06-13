import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';
import logo from '../assets/images/netflix-logo.png';
import avatar from '../assets/images/generic-avatar.png';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    
    const transitionNavBar = () => {
        if (window.scrollY > 80) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    // Code will run when component mounts
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        
        // Clean up: Remove event listener when done.
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo" 
                    src={logo} 
                    alt="" 
                />
                <img
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src={avatar}
                    alt="Netflix avatar icon" 
                />
            </div>

            
        </div>
    )
}

export default Nav
