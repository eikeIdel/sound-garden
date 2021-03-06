import React from "react";
import "./main-content.css";
import ImageRandomizer from "./image-randomizer";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo1 from "./assets/soundgarden_logo.png";

const MainContent = () => {
  return (
    
      <div className="welcome-content">
        <div className="welcome-text">
          <div className="logo-comp">
            <div className="logo">
              <img src={Logo1} alt="Logo1" width="100%" />
            </div>
          </div>
        </div>
        <div className="welcome-subtext">
          <p>
            "Welcome to Sound Garden an immersive experience for the Berlin
            Botanical Garden and Museum Greenhouses. Here you can connect to the
            different greenhouses which you can visit in person, and listen to
            the sounds of the fauna and flora relative to the environment of
            each greenhouse.
          </p>
        </div>
        
          <div className="button-section">
            <Link to="/Map">
              <button className="button">Enter</button>
            </Link>
          </div>
        
        &nbsp; &nbsp;
        <div className="image-section">
          <ImageRandomizer />
        </div>
      </div>
    
  );
};

export default MainContent;
