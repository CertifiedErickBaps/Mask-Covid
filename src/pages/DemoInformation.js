import React from 'react';
import "../styles/DemoInformation.scss";
import demoImage from "../images/weddingMask.jpg";

const DemoInformation = ({data}) => {
  return (
    <div className="demo" id="how">
      <div className="information-container">
        <img src={demoImage} alt="Wedding Mask COVID-19"/>
        <div className="info">
          <p>
          <span>
            {data.information.first}
          </span>
          </p>
          <p>
          <span>
            {data.information.second}
          </span>
          </p>
          <p>
          <span>
            {data.information.third}
          </span>
          </p>
        </div>
        <div className="phrase">
          <div className="flex-container">
            <p>
          <span>
            {data.phrase}
          </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInformation;
