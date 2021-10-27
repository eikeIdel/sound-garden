import React from 'react';
import './slider.css';

function Slider(){

    return(
<div className='slider-main'>
        <div className='info-button'>i</div>
        <button className="mute">Mute</button>
        <input type="range" name='--to-do--' className="slider" />
        
</div>
    )
}

export default Slider