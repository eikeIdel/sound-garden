import React from 'react';
import './image-randomizer.css';
import Image1 from './assets/1.jpg';
import Image2 from './assets/2.jpg';
import Image3 from './assets/3.jpg';
import Image4 from './assets/4.jpg';
import Image5 from './assets/5.jpg';

const ImageRandomizer = () => {
    return (
        <div className="slide-comp">
            <div className="slide">
                <div>
                    <img src={Image1} alt="1"/>
                </div>
                <div>
                    <img src={Image2} alt="2"/>
                </div>
                <div>
                    <img src={Image3} alt="3"/>
                </div>
                <div>
                    <img src={Image4} alt="4"/>
                </div>
                <div>
                    <img src={Image5} alt="5"/>
                </div>
            </div>
        </div>    
    );
}

export default ImageRandomizer;