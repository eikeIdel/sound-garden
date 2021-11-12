import SoundMixer from "./sound-mixer/sound-mixer";
import './greenhouse.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";

// import BGImage from "./bg-visual/background-image.js";


function Greenhouse(props) { 
  //props are declared in ../Router/router.jsx
  const [presetLoaded,setPresetLoaded] = useState(false);
  const [soundReset,setSoundReset] = useState(false);
  
  return( 
    <div className='greenhouse-main'>
      
      <div className="greenhouse-head">
        <Link to="/Map">
        <img 
        className="greenhouse-return-button" 
        src='https://via.placeholder.com/200x200?text=Return'  
        alt="greenhouse-return"
          
        
        />
         </Link>
        <h4 className='house-name'>{props.houseName}</h4>

        
        <img className="greenhouse-reset-button" src="https://via.placeholder.com/200x200?text=ResetSounds" alt="greenhouse-reset" onClick={()=>setSoundReset(true)}/>
       

        <img className="greenhouse-preset-button" src="https://via.placeholder.com/200x200?text=Preset" alt="greenhouse-preset" onClick={()=>setPresetLoaded(true)}/>
      
              

      </div>
      
      <SoundMixer soundSelection={props.soundSelection} presetLoaded={presetLoaded} setPresetLoaded={setPresetLoaded} soundReset={soundReset} setSoundReset={setSoundReset}/>
  
  </div>
  )
  }

export default Greenhouse;
