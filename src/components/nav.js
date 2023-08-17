import React, { useState } from "react";
import logo from "../Assets/images/Orinova Logo 2.png"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

// import ReactSwitch from "react-switch";

function Nav(){
    const [navBg, setNavBg] = useState(true) //state for NavBar background change
// Change NavBar background color on scroll
    const changeNavBg = () => {
        const scrollSize = window.scrollY;
        if(scrollSize >= 90){
            setNavBg(true)
        }else{
            setNavBg(false)
        }
    }
    window.addEventListener("scroll", changeNavBg);
// Function end

// Mobile Navigation setup

    const [navToggle, setNavToggle] = useState(false);
    
    function showHideNav(){
        const hamburger = document.getElementById("hamburger") 
        const mNav = document.getElementById("mNav");
        const closeNav = document.getElementById("closeNav");
        if(mNav.style.display !== "block"){
            mNav.style.display = "block"
            closeNav.style.display = "block"
            hamburger.style.display = "none"
        }else{
            mNav.style.display = "none"
            closeNav.style.display = "none"
            hamburger.style.display = "block"
        }
    }
// Function end
    return(
        <>
        {/* Desktop
                    Nav Bar */}
        
            <nav className={navBg ? "nav active" : "nav"}>
            <div id="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li><Link smooth to="/">Home</Link></li>
                    <li ><HashLink smooth to="./#services">Services</HashLink></li>
                    <li ><Link to="/About">About us</Link></li>
                    <li ><HashLink smooth to="/#contactContainer">Contact us</HashLink></li>
                </ul>
                {/* <ReactSwitch className="react-switch"/>   */}
                <div id="toggler">
                    <i class="fa-solid fa-bars" id="hamburger" onClick={() => setNavToggle(!navToggle)}></i>
                </div>          
            </div>
            
        </nav>


        {/* Mobile Nav Bar */}
        {navToggle && 
            <div id="mNav">
                <div>
                    <i class="fa-solid fa-xmark" id="closeNav" onClick={() => setNavToggle(!navToggle)}></i>
                </div>
                <div>
                    <img src={logo} alt="tech desk logo" id="mLogo" />
                </div>
                <ul>
                    <li onClick={() => setNavToggle(!navToggle)}><Link to="/">Home</Link></li>
                    <li onClick={() => setNavToggle(!navToggle)}><HashLink to="#services">Services</HashLink></li>
                    <li onClick={() => setNavToggle(!navToggle)}><Link to="/About">About us</Link></li>
                    <li onClick={() => setNavToggle(!navToggle)}><HashLink to="#contactContainer">Contact us</HashLink></li>
                    <li onClick={() => setNavToggle(!navToggle)}><Link to="">Portfolio</Link></li>
                </ul>
                <p>support@techdesk.io</p>
            </div>
            
        }
        </>
    )
}

export default Nav;