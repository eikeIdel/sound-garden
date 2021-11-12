import React from "react";
import "./image-randomizer.css";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";
import Image4 from "./assets/image4.jpg";
import Image5 from "./assets/image5.jpg";
import Image6 from "./assets/image6.jpg";
import Image7 from "./assets/image7.jpg";
import Image8 from "./assets/image8.jpg";
import Image9 from "./assets/image9.jpg";
import Image10 from "./assets/image10.jpg";
import Image11 from "./assets/image11.jpg";
import Image12 from "./assets/image12.jpg";

const ImageRandomizer = () => {
  return (
    <div className="slide-comp">
      <div className="slide">
        <div>
          <img src={Image1} alt="1" />
        </div>
        <div>
          <img src={Image2} alt="2" />
        </div>
        <div>
          <img src={Image3} alt="3" />
        </div>
        <div>
          <img src={Image4} alt="4" />
        </div>
        <div>
          <img src={Image5} alt="5" />
        </div>
        <div>
          <img src={Image6} alt="6" />
        </div>
        <div>
          <img src={Image7} alt="7" />
        </div>
        <div>
          <img src={Image8} alt="8" />
        </div>
        <div>
          <img src={Image9} alt="9" />
        </div>
        <div>
          <img src={Image10} alt="10" />
        </div>
        <div>
          <img src={Image11} alt="11" />
        </div>
        <div>
          <img src={Image12} alt="12" />
        </div>
      </div>
    </div>
  );
};

export default ImageRandomizer;
