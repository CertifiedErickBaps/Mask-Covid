import React from 'react';
import "../styles/DemoInformation.scss";
import demoImage from "../images/weddingMask.jpg";

const DemoInformation = () => {
  return (
    <div className="demo" id="how">
      <div className="information-container">
        <img src={demoImage} alt="Wedding Mask COVID-19"/>
        <div className="info">
          <p>
          <span>
            Machine learning is a subarea of ​​Artificial Intelligence that has shown high efficiency in such situations
            to understand, visualize and understand information appropriately.
          </span>
          </p>
          <p>
          <span>
            Due to the current situation, one of the rules is to wear a mask as a protection and hygiene measure. Due to
            this situation, there is a need to be able to recognize whether people are wearing face masks, since it is
            currently a mandatory measure in most centers or institutions.
          </span>
          </p>
        </div>
        <div className="phrase">
          <div className="flex-container">
            <p>
          <span>
            “What you don’t do determines what you can do.”
            Tim Ferriss
          </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInformation;