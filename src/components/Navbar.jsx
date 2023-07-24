import React from "react";
import "../styles/navbar.css";
import logo from "../images/slack.svg"
import {AiOutlineDown} from 'react-icons/ai'
import {AiOutlineUp} from 'react-icons/ai'


function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <img className="logo" src= {logo} alt="slack logo" width= '20px'/>
                <header className="header">
                    <h3>Sign in | Slack</h3>
                </header>
                <div className="nav-icons">
                    <AiOutlineDown/>
                    <AiOutlineUp/>
                </div>
            </nav>

        </div>
    )
}

export default Navbar