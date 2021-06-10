import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';

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
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="" 
                />
                <img
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="Netflix avatar icon" 
                />
            </div>

            
        </div>
    )
}

export default Nav
