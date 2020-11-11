import React from 'react';
import "../styles/LogoTransition.scss";

const LogoTransition = ({data}) => {
  return (
    <div className="logo-container">
      <div className="text">
          <span>
            {data.phrase}
          </span>
      </div>
    </div>
  );
};

export default LogoTransition;