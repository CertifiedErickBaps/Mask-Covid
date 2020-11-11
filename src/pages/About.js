import React from 'react';
import "../styles/About.scss";

const About = ({data}) => {
  return (
    <div className="about-container">
      <div className="title-about" id="about">
        <p>
          <span>
            {data.title.first} &nbsp;
          </span>
          <span className="color-orange">
            {data.title.second} &nbsp;
          </span>
          <span>{data.title.third}</span>
        </p>
      </div>
      <div className="items-container">
        {data.items.map((element, id) => {
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