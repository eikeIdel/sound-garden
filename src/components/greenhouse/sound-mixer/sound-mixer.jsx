import { useState,useContext} from 'react';
import Slider from "./slider";
import "./sound-mixer.css";
import Mutebttn from "../button-icons/mute-bttn.png";
import Unmutebttn from "../button-icons/unmuted-bttn.png";
// import GreenhouseContext from '../greenhouse.jsx';


function SoundMixer(props) {
const [masterVolume,setMasterVolume] = useState(0.5);
const [masterMuted,setMasterMuted] = useState(false);
const imgMuteSound = Unmutebttn;
const imgPlaySound = Mutebttn;

// const { greenhousePresets } = useContext(GreenhouseContext);

  return (
    <div className="sound-mixer-main">
     
     {/* <form> */}

      {props.greenhousePresets?.map(selectedSound =>
      
      <Slider 
      // Database Source 
      name={selectedSound.sound_name}
      presetValue={selectedSound.sound_volume}
      sourceId={selectedSound.source_id}
      infoText={selectedSound.info_text}
      soundImg={selectedSound.icon_name}
      // States
      presetLoaded={props.presetLoaded}
      setPresetLoaded={props.setPresetLoaded}
      masterVolume={masterVolume}
      masterMuted={masterMuted}
      soundReset={props.soundReset}
      setSoundReset={props.setSoundReset}
      //Images
      imgMuteSound = {imgMuteSound}
      imgPlaySound = {imgPlaySound}
      
      />)}
      {/* </form> */}
      <h4>Master Volume:</h4>

      <div className="master-slider-container">
        
        <div className="master-mute-button">
          <img
            src={masterMuted ? imgPlaySound : imgMuteSound}
            alt="mute-button"
            onClick={()=>setMasterMuted(!masterMuted)}
          />
        </div>

        <input
          className="master-slider"
          type="range"
          
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
