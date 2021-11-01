import React from 'react';
import './welcome.css';
import Header from './welcome/header';
import MainContent from './welcome/main-content';
import Footer from './welcome/footer';


function Welcome () {
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
