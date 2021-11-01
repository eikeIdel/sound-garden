import React, { useState } from "react";
import "./slider.css";

function Slider(props) {
  const [volume, setVolume] = useState(0);
  const [muted, setMuted] = useState(false);
  let finalVolume = muted ? 0 : volume; 
 
  return (
    <div className="slider-main">
      <div className="info-button">
        <img
          src="https://via.placeholder.com/100x100?text=i"
          alt="info-button"
          onClick={()=>alert(props.infoText)}
        />
      </div>

      <button className="mute-button" onClick={()=>setMuted(!muted)}>
        Mute
      </button>

      <input
        className="slider"
        type="range"
        name={props.name}
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value); 
        }}
      />

      <p style={{ width: "30px" }}>{parseInt(finalVolume * 100)}%</p>
      <p style={{width: '60px', fontSize:'0.5rem'}}>Sourcefile:{props.source}</p>
      {console.log(props)}
    </div>
  );
}

export default Slider;
