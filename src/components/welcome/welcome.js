import React from "react";
import "./welcome.css";
import Header from "./header";
import MainContent from "./main-content";
import Footer from "./footer";

function Welcome() {
  return (
    <div className="welcome">
      <p className="header">
        <Header />
      </p>
      <p className="main-content">
        <MainContent />
      </p>
      <p className="footer">
        <Footer />
      </p>
    </div>
  );
}

export default Welcome;
