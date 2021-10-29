import Slider from "./slider";
import "./sound-mixer.css";
import { soundList } from "./soundList";

function SoundMixer(props) {

 

  return (
    <div className="sound-mixer-main">
      {props.soundSelection.map((sound)=>
      <Slider name={sound} 
      source={soundList[soundList.findIndex(obj => obj.name === sound)]['source']}/>)}
    </div>
  );
}

export default SoundMixer;
