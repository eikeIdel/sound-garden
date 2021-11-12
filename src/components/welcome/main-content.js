import React from "react";
import "./main-content.css";
import ImageRandomizer from "./image-randomizer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo1 from "./assets/soundgarden_logo.png";
import MapIcon from "./assets/icons/map_icon.png";

const MainContent = () => {
  return (
    <Router>
      <div className="welcome-content">
        <div className="welcome-text">
          <div className="logo">
            <img src={Logo1} alt="Logo1" width="100%" />
          </div>
        </div>
        <div className="welcome-subtext">
          <p>
            Welcome to Sound Garden an immersive experience for the Berlin
            Botanical Garden and Museum Greenhouses.
          </p>
        </div>
        <Route>
          <div className="button-section">
            <Link to="/Map">
              <button className="button">
                <span>map</span>
                <img className="button-img" src={MapIcon} width="70px" />
              </button>
            </Link>
          </div>
        </Route>
        &nbsp; &nbsp;
        <div className="image-section">
          <ImageRandomizer />
        </div>
      </div>
    </Router>
  );
};

export default MainContent;
