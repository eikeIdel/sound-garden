import React,{useState} from 'react';
import './slider.css';

function Slider(){
    
    const [volume, setVolume] = useState(0);
    const [muted, setMuted] = useState(false);
    let finalVolume = muted ? 0 : volume ; //volume ** 2

    function muteHandle(){

        setMuted(!muted);
        console.log(muted);
    }


    return(
<div className='slider-main'>
        
        <div className="info-button"><img  src="https://via.placeholder.com/100x100?text=i" alt="info-button"/></div>
        
        <button className="mute-button" onClick={muteHandle}>Mute</button>
        
        <input 
        className="slider"
        type="range" 
        name='--to-do--' 
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value); //.valueAsNumber
        }}
         />

       <p style={{width:'30px'}}>{parseInt(finalVolume*100)}%</p> 
</div>
    )
}

export default Slider