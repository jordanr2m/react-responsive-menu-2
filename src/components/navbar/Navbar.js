import React, { useState } from 'react'
import { AiOutlineRocket, AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='container navbar'>
            <div className='logo'>
                <AiOutlineRocket color="fff" size={35} />
                <p className='logo-text'>Lucy.<span>com</span></p>
            </div>

            <menu>
                <ul className='nav-links' id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li className='nav-btn'><a className="btn btn-orange" href="#">Get Started</a></li>
                </ul>
            </menu>

            <div className='menu-icons'>
                {showMenu ? (
                    <RiCloseLine color="fff" size={27}/>
                ) : (
                    <AiOutlineBars color="fff" size={27} />
                )}
            </div>
        </nav>
    )
}

export default Navbar
