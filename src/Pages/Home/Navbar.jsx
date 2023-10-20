import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    // State to manage the navigation menu's active status
    const [navActive, setNavActive] = useState(false);

    // Function to toggle the navigation menu
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    // Function to close the navigation menu
    const closeMenu = () => {
        setNavActive(false);
    };

    // Use useEffect to handle window resize events
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu(); // Close the menu when the window is narrow
            }
        };

        // Add a listener for the resize event
        window.addEventListener('resize', handleResize);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Use useEffect to close the menu when the window is narrow initially
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="Logo" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        {/* Links to different sections with smooth scrolling */}
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="centered">
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    )
}

export default Navbar;
