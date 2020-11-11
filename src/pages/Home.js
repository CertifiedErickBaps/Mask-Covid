import React from 'react';
import imageStatue from "../images/mask.png";
import Navbar from "../components/Navbar";

//Styles
import "../styles/Home.scss";

import DemoInformation from "./DemoInformation";
import LogoTransition from "./LogoTransition";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="banner-background" id="home">
        <Navbar/>
        <div className="home-container">
          <div className="title-container">
            <div className="title-subcontainer">
              <span className="first-title">Save &nbsp;</span>
              <span>lives</span>
            </div>
            <div className="title-subcontainer">
              <span>Stay &nbsp;</span>
              <span className="second-title">safe</span>
            </div>

          </div>
          <div className="home-information-container">
            <div className="paragraph-container">
              <p>
                <span className="first-paragraph">Why? Using our facial recognition software for the use of masks and thus prevent infection.</span>
              </p>
              <p>
                <span className="second-paragraph">How? Just click on the button to use the demo and contact us.</span>
              </p>
            </div>
            <div className="button-container">
              <a className="btn waves-effect waves-light">Use demo</a>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img className="image-responsive" src={imageStatue} alt="Statue with Face Mask"/>
        </div>
      </div>
      <DemoInformation/>
      <LogoTransition/>
      <About/>
      <Footer/>
    </>
  );
};

export default Home;