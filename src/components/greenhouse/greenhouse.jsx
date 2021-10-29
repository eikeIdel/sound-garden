import SoundMixer from "./sound-mixer/sound-mixer";

function Greenhouse(props) {
  
  return( 
    <div>
      <h1>{props.houseName}</h1>
  <SoundMixer soundSelection={props.soundSelection}/>

  
  </div>
  )
  }

export default Greenhouse;
