import React, {Fragment} from 'react';

import "../styles/CameraDemo.scss";

import {CameraFeed} from '../components/CameraFeed';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Upload to local seaweedFS instance
const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);
  console.log(formData);
  // Connect to a seaweedfs instance
};

const CameraDemo = () => {
  return (
    <>
      <Navbar/>
      <div className="container-camera">
        <div className="title-camera">
          <p>
            <span>
              Facial &nbsp;
            </span>
            <span className="color-orange">
              recognition &nbsp;
            </span>
          </p>
        </div>
        <div className="info-camera">
          <p>
              <span>
               Capture image from USB webcamera and upload to recognize
              </span>
          </p>
        </div>
        <div className="camera-image">
          <CameraFeed sendFile={uploadImage}/>
        </div>
      </div>
      <Footer/>
    </>
  );
};


export default CameraDemo;