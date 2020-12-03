import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {BrowserRouter as Router, Switch, Link, Route, NavLink} from "react-router-dom";
import "../styles/NavBar.scss";
import logo from "../images/logo.svg";

import App from "../App";
import CameraDemo from "../pages/CameraDemo";


const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div className="flexbox-container">
            <img src={logo} alt="Logo Face Mask"/>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavHashLink smooth to="/#home" activeStyle={{color: '#ED6229'}}>Home</NavHashLink></li>
              <li><NavHashLink smooth to="/#how" activeStyle={{color: '#ED6229'}}>Our Cause</NavHashLink></li>
              <li><NavHashLink smooth to="/#about" activeStyle={{color: '#ED6229'}}>Our Model</NavHashLink></li>
                <li><Link to="/demo">Image Demo</Link></li>
                <li><Link to="/demo-realtime">Realtime Demo</Link></li>
              <li><NavHashLink smooth to="/#footer" activeStyle={{color: '#ED6229'}}>Contact Us</NavHashLink></li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
