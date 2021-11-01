import Slider from "./slider";
import "./sound-mixer.css";
import { soundList } from "./soundList";

function SoundMixer(props) {

 

  return (
    <div className="sound-mixer-main">
      {props.soundSelection.map((slectedSound)=>
      <Slider 
      name={slectedSound}
      source={soundList[soundList.findIndex(soundObj => soundObj.name === slectedSound)]['source']}/>)}
    </div>
  );
}

export default SoundMixer;
