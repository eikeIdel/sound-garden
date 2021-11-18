import { useState,useEffect,useRef } from 'react';
import "./slider.css";
import Infobttn from "../button-icons/info-bttn.png"
import { soundList } from './soundList';

function Slider(props) {
  const [volume, setVolume] = useState(0);
  const [muted, setMuted] = useState(false);
  const [soundUrl,setSoundUrl] = useState('');
  
  useEffect(() => {
    fetch(`http://localhost:8000/house-config/${props.greenhouseId}`)
    .then(res => res.json())
    .then(json => {
      
    })
  })

  useEffect(()=>{
       fetch(`https://freesound.org/apiv2/sounds/${props.sourceId}/?token=B2giRt5IAiosOu6pvRcfAM4zpU8qDA2f37HBddB3`)
       .then(response => response.json())
       .then(json => {
         setSoundUrl(json.previews["preview-hq-mp3"])
      });
  },[])
 
  const audioRef = useRef(new Audio(soundUrl));

  useEffect(() => {
    if(props.presetLoaded){
      setVolume(props.presetValue)
    }
    else if (props.soundReset){
      setVolume(0);
    }
  },[props.presetLoaded,props.soundReset]);

  useEffect(() => {
    muted || props.masterMuted ? audioRef.current.pause() : audioRef.current.play();
    audioRef.current.volume = volume * props.masterVolume;
    props.setPresetLoaded(false);
    props.setSoundReset(false);
  }, [muted,volume,props.masterMuted,props.masterVolume]);
  
  let soundImg;
  switch (props.soundImg){
    case 'WeatherIcon':
      soundImg = WeatherIcon;
      break;
    case 'BirdIcon':
      soundImg = BirdIcon;
      break;
    case 'WindIcon':
      soundImg = WindIcon;
      break;
    case 'WildLifeIcon':
      soundImg = WildLifeIconIcon;
      break;
    case 'JungleIcon':
      soundImg = JungleIcon;
      break;
    case 'NatureIcon':
      soundImg = NatureIcon;
      break;
    case 'WaterIcon':
      soundImg = WaterIcon;
      break;
    case 'InsectsIcon':
      soundImg = InsectsIcon;
      break;
  }
  return (
    <div className="slider-main">
      
      <div className="info-button">
        <img
          src={Infobttn}
          alt="info-button"
          onClick={()=>alert(props.infoText)}
        />
      </div>

      <div className="mute-button">
          <img
            src={muted ? props.imgPlaySound : props.imgMuteSound}
            alt="mute-button"
            onClick={()=>setMuted(!muted)}
          />
      </div>

      <audio src={soundUrl} ref={audioRef} loop></audio>
      
      <div className="slider-container">
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
      </div>
      <div className="sound-image-container">
        <img className="sound-image" src={props.soundImg} alt="sound-image" />
        <p className="sound-image-text">{props.name}</p>
     </div>
      
    </div>
    
  );
}

export default Slider;
