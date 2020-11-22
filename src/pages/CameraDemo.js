import React, {Fragment} from 'react';

import "../styles/CameraDemo.scss";

import {CameraFeed} from '../components/CameraFeed';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Webcam from "react-webcam";

//Data
import data from "../data/data.js";

const WebcamComponent = () => <Webcam />;


const CameraDemo = () => {


  return (
    <>
      <Navbar/>
      <div className="container-camera">
        <div className="title-camera">
          <p>
            <span>
              Mask‏‏‎‏‏‎  ‎
            </span>
            <span className="color-orange">
              Detection‏‏‎ ‎
            </span>
            <span>
              Demo
            </span>
          </p>
        </div>
        <div className="info-camera">
          <p>
              <span>
               Test our model by uploading an image!
              </span>
          </p>
        </div>

        <div className="camera-image">
          <CameraFeed/>
        </div>

      </div>
      <Footer data={data[4]}/>
    </>
  );
};


export default CameraDemo;
