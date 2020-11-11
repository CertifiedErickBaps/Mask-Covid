import React from 'react';
import "../styles/About.scss";
import database from "../icons/database.svg";
import dataset from "../icons/dataset.svg";
import globe from "../icons/globe.svg";
import qrcode from "../icons/qrcode.svg";
import training from "../icons/training.svg";
import user from "../icons/user.svg";

const items = [
  {
    icon: database,
    title: "Data extraction",
    info: "We train a deep learning model to classify whether a person is wearing a mask or not and we find a good dataset with a fair amount of images for both classes."
  },
  {
    icon: dataset,
    title: "Building the dataset class",
    info: "We build the Dataset class which will be used for querying samples by batches in a way interpretable by PyTorch."
  },
  {
    icon: user,
    title: "Building our face mask detector model",
    info: "Thanks to obtaining multiple photos we can detect the differences between having and not having a mask."
  },
  {
    icon: training,
    title: "Training our model",
    info: "We use machine learning to train our model and have it ready to predict the next photo."
  },
  {
    icon: globe,
    title: "Testing our model on real data",
    info: "We use \"OpenCV\" for the deep learning of the photos and the detection of the masks."
  },
  {
    icon: qrcode,
    title: "Detect face and mask in the image",
    info: "Extract the data frames in the image in real time and detected faces, along with the predictions computed by our model."
  }
];

const About = () => {
  return (
    <div className="about-container">
      <div className="title-about" id="about">
        <p>
          <span>
            How facial &nbsp;
          </span>
          <span className="color-orange">
            recognition &nbsp;
          </span>
          <span>works?</span>
        </p>
      </div>
      <div className="items-container">
        {items.map((element, id) => {
          return (
            <div key={id} className="item">
              <div className="icon">
                <img src={element.icon} alt=""/>
              </div>
              <div className="title-item">
                <p>
              <span>
                {element.title}
              </span>
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span>{element.info}</span>
                </p>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default About;