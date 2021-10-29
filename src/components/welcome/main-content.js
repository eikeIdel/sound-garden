import React from 'react';
import './main-content.css';
import ImageRandomizer from './image-randomizer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const MainContent = () => {
    return (
        <Router>
        
        <div className="welcome-content">
            <div className="welcome-text">
                <h1 className="title">Sound Garden</h1>
                <h1 className="title-de">Klanggarten</h1>
            </div>
            <div className="welcome-subtext">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </div>
                <Route>
            <div className="button">
          <Switch path="/"><button>Enter</button></Switch>
            </div>
                </Route>
            <div className="image-section">
                <ImageRandomizer />
            </div>
        </div>

        </Router>
    );
}

export default MainContent;