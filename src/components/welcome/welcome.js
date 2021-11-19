import React from "react";
import "./welcome.css";
import Header from "./header";
import MainContent from "./main-content";
import Footer from "./footer";

function Welcome() {
  return (
    <div className="welcome">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <MainContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
