import { useState,useEffect} from 'react';
import Slider from "./slider";
import "./sound-mixer.css";
import { soundList } from "./soundList";


function SoundMixer(props) {
const [masterVolume,setMasterVolume] = useState(0.5);

  return (
    <div className="sound-mixer-main">
     
      {props.soundSelection.map(slectedSound =>

      <Slider 
      name={slectedSound}
      sourceId={soundList[soundList.findIndex((soundObj) => soundObj.name === slectedSound)]['sourceId']}
      infoText={soundList[soundList.findIndex((soundObj) => soundObj.name === slectedSound)]['infoText']}
      masterVolume={masterVolume}
      setMasterVolume={setMasterVolume}
      />)}
<h4>Master Volume:</h4>
<input
        className="master-slider"
        type="range"
        name={props.name}
        min={0}
        max={1}
        step={0.02}
        value={masterVolume}
        onChange={(event) => {
          setMasterVolume(event.target.value);
        }}
      />
      
    </div>
  );
}

export default SoundMixer;
