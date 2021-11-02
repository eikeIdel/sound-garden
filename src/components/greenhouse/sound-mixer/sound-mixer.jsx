
import Slider from "./slider";
import "./sound-mixer.css";
import { soundList } from "./soundList";


function SoundMixer(props) {

  

  return (
    <div className="sound-mixer-main">
     
      {props.soundSelection.map(slectedSound =>

      <Slider 
      name={slectedSound}
      sourceId={soundList[soundList.findIndex((soundObj) => soundObj.name === slectedSound)]['sourceId']}
      infoText={soundList[soundList.findIndex((soundObj) => soundObj.name === slectedSound)]['infoText']}
      />)}
      
    </div>
  );
}

export default SoundMixer;
