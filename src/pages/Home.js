import React from 'react';
import imageStatue from "../images/mask.png";
import Navbar from "../components/Navbar";
import {BrowserRouter as Router, Switch, Link, Route, NavLink} from "react-router-dom";

//Styles
import "../styles/Home.scss";

//Components
import DemoInformation from "./DemoInformation";
import LogoTransition from "./LogoTransition";
import About from "./About";
import Footer from "../components/Footer";

//Data
import data from "../data/data.js";

const Home = () => {
  const title = data[0].title;
  const subtitle = data[0].subtitle;
  return (
    <>
      <div className="banner-background" id="home">
        <Navbar/>
        <div className="home-container">
          <div className="title-container">
            <div className="title-subcontainer">
              <span className="first-title">{title.first} </span>
              <span>{title.second},</span>
            </div>
            <div className="title-subcontainer">
              <span>{title.third} </span>
              <span className="second-title">{title.fourth}.</span>
            </div>
          </div>
          <div className="home-information-container">
            <div className="paragraph-container">
              <p>
                <span className="first-paragraph">{subtitle.first}</span>
              </p>
              <p>
                <span className="second-paragraph">{subtitle.second}</span>
              </p>
            </div>
            <div className="button-container">
            <Link to='/demo'>
              <button className="btn waves-effect waves-light">{subtitle.btn}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img className="image-responsive" src={imageStatue} alt="Statue with Face Mask"/>
        </div>
      </div>
      <DemoInformation data={data[1]}/>
      <LogoTransition data={data[2]}/>
      <About data={data[3]}/>
      <Footer data={data[4]}/>
    </>
  );
};

export default Home;
