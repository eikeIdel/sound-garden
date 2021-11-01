import SoundMixer from "./sound-mixer/sound-mixer";

function Greenhouse(props) { 
  //props are declared in ../Router/router.jsx
  return( 
    <div>
      <h1>{props.houseName}</h1>
  <SoundMixer soundSelection={props.soundSelection}/>

  
  </div>
  )
  }

export default Greenhouse;
