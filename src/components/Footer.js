import React from 'react';
import logo from "../images/logo.svg";
import github from "../icons/Github.svg";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="contact">
          <div className="title-contact">
            <p>
              <span>Do you have any doubts about how it was done?</span>
            </p>
          </div>
          <div className="input-contact">
            <input placeholder="Leave your email" type="email" className="validate"/>
          </div>
          <div className="button-container">
            <a className="btn waves-effect waves-light">Send</a>
          </div>
        </div>
        <div className="logo-footer">
          <img src={logo} alt="Logo Face Mask"/>
        </div>
        <div className="other-socialmedia">
          <div className="social-media">
            <img src={github} alt="Github repository"/>
          </div>
          <div className="social-media">
            <img src={github} alt="Github repository"/>
          </div>
          <div className="social-media">
            <img src={github} alt="Github repository"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;