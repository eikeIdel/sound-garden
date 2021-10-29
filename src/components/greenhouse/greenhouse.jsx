import SoundMixer from "./sound-mixer/sound-mixer";

function Greenhouse(props) {
  
  return( 
    <div>
  <SoundMixer soundSelection={props.soundSelection}/>

  
  </div>
  )
  }

export default Greenhouse;
