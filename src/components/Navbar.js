import React, { useEffect, useState} from "react";
import {Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    // close the navbar when the location changes
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
    // getting the navbar height if there is a navbar
    useEffect(() => {
        const navbarElement = document.getElementById("navbar");
        if (navbarElement) {
            document.documentElement.style.setProperty('--nav-height', `${navbarElement.offsetHeight}px`);
        }
    }, []);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}> 
            <div className = "toggleButton">
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon /> 
                </button>
            </div>
            <div className = "links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    );
    }

export default Navbar;
