import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"
class NavBar extends Component {
    render() {
        return (
                <div className="nav-container">
                    <div className="nav-bar">
                        <div className="left-nav"> 
                            <Link to="/" className="home-link">
                                <img className="logo-icon" src='img/signature.svg'></img>
                            </Link>
                            <Link to="/" className="home-link">William  Wakefield</Link>
                        </div>
                        <div className="right-nav"> 
                            <Link to="/portfolio" className="nav-link">Portfolio</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                            <Link to="/about" className="nav-link">About</Link>
                        </div>   
                    </div>
                </div>
        );
    }
}

export default NavBar;