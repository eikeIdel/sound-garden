import { useState,useEffect,useRef } from 'react';
import "./slider.css";

function Slider(props) {
  const [volume, setVolume] = useState(0);
  const [muted, setMuted] = useState(false);
  let finalVolume = muted ? 0 : volume ; 

  const [soundObj,setSoundObj] = useState('');
    
    useEffect(()=>{
       fetch(`https://freesound.org/apiv2/sounds/${props.sourceId}/?token=B2giRt5IAiosOu6pvRcfAM4zpU8qDA2f37HBddB3`)
       .then(response => response.json())
       .then(json => {
         setSoundObj({
          name:props.name,
          source:json.previews["preview-hq-mp3"],
          infoText:props.infoText})
      });
  },[])
 
  const audioRef = useRef(new Audio(soundObj.source));
  
  useEffect(() => {
    muted ? audioRef.current.pause() : audioRef.current.play()
  }, [muted]);

  return (
    <div className="slider-main">
      <div className="info-button">
        <img
          src="https://via.placeholder.com/100x100?text=i"
          alt="info-button"
          onClick={()=>alert(soundObj.infoText)}
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
      <p style={{width: '60px', fontSize:'0.5rem'}}>Sourcefile:{soundObj.source}</p>
      
    </div>
  );
}

export default Slider;
