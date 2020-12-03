import React, { Fragment } from "react";
import "../styles/Canvas.scss";

import { CameraFeedCanvas } from "../components/CameraFeedCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Data
import data from "../data/data.js";

// Upload to local seaweedFS instance
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
};

const CameraDemoCanvas = () => {
  return (
    <>
      <Navbar />
      <div className="container-camera">
        <div className="title-camera">
          <p>
          <span className="color-orange">Realtime&nbsp;</span>
            <span>Camera Mask Detection&nbsp;</span>
          </p>
        </div>
        <div className="info-camera">
          <p>
            <span>
              Let our system detect in realtime whether you're wearing a mask or not!
            </span>
          </p>
        </div>
        <div className="camera-image">
          <CameraFeedCanvas sendFile={uploadImage} />
        </div>
      </div>
      <Footer data={data[4]} />
    </>
  );
};

export default CameraDemoCanvas;
