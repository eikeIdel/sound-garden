import { useState} from 'react';
import Slider from "./slider";
import "./sound-mixer.css";
import { soundList } from "./soundList";


function SoundMixer(props) {
const [masterVolume,setMasterVolume] = useState(0.5);
const [masterMuted,setMasterMuted] = useState(false);
const imgMuteSound = "https://via.placeholder.com/300x200/BBDCA2?text=Mute";
const imgPlaySound = "https://via.placeholder.com/300x200/FF0000?text=Play";

  return (
    <div className="sound-mixer-main">
     
     {/* <form> */}

      {props.soundSelection.map(slectedSound =>
      
      <Slider 
      name={Object.keys(slectedSound)[0]}
      presetValue={slectedSound[Object.keys(slectedSound)[0]]}
      presetLoaded={props.presetLoaded}
      setPresetLoaded={props.setPresetLoaded}
      sourceId={soundList[soundList.findIndex((soundObj) => soundObj.name === Object.keys(slectedSound)[0])]['sourceId']}
      infoText={soundList[soundList.findIndex((soundObj) => soundObj.name === Object.keys(slectedSound)[0])]['infoText']}
      masterVolume={masterVolume}
      masterMuted={masterMuted}
      imgMuteSound = {imgMuteSound}
      imgPlaySound = {imgPlaySound}
      soundReset={props.soundReset}
      setSoundReset={props.setSoundReset}
      />)}
      {/* </form> */}
      <h4>Master Volume:</h4>

      <div className="master-slider-container">
        
        <div className="master-mute-button">
          <img
            src={masterMuted ? imgPlaySound : imgMuteSound}
            alt="info-button"
            onClick={()=>setMasterMuted(!masterMuted)}
          />
        </div>

        <input
          className="master-slider"
          type="range"
          name={props.name}
          min={0}
          max={1}
          step={0.02}
          value={masterVolume}
          list="stepmarks"
          onChange={(event) => {
            setMasterVolume(event.target.value);
          }}
        />
      </div>

    </div>
  );
}

export default SoundMixer;
