import { useState,useEffect,useRef } from 'react';
import "./slider.css";

function Slider(props) {
  const [volume, setVolume] = useState(0);
  const [muted, setMuted] = useState(false);
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
    if(props.presetLoaded){
      setVolume(props.presetValue)
    }
  },[props.presetLoaded]);

  useEffect(() => {
    muted || props.masterMuted ? audioRef.current.pause() : audioRef.current.play();
    audioRef.current.volume = volume * props.masterVolume;
    props.setPresetLoaded(false);
  }, [muted,volume,props.masterMuted,props.masterVolume]);

  return (
    
    
    <div className="slider-main">
      
      <div className="info-button">
        <img
          src="https://via.placeholder.com/100x100?text=i"
          alt="info-button"
          onClick={()=>alert(soundObj.infoText)}
        />
      </div>

      <div className="mute-button">
          <img
            src={muted ? props.imgPlaySound : props.imgMuteSound}
            alt="info-button"
            onClick={()=>setMuted(!muted)}
          />
      </div>

      <audio src={soundObj.source} ref={audioRef} loop></audio>
      
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

      <h6>{props.name}</h6>      
      
    </div>
    
  );
}

export default Slider;
