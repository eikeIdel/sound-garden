import SoundMixer from "./sound-mixer/sound-mixer";
import './greenhouse.css'

import Router from "../Router/Router";
import { BrowserRouter as Link } from 'react-router-dom';


import { useState } from "react";


// import BGImage from "./bg-visual/background-image.js";


function Greenhouse(props) { 
  //props are declared in ../Router/router.jsx
  const [presetLoaded,setPresetLoaded] = useState(false);

  
  return( 
    <div className='greenhouse-main'>
      {/* <BGImage /> */}
      <div className="greenhouse-head">

        < Link to="/Map"><div>
        <img 
        className="greenhouse-return-button" 
        src='https://via.placeholder.com/200x200?text=Return'  
        alt="greenhouse-return"
        // onClick={() => alert('Return to overview map')}
        /> </div></Link>

        <h4 className='house-name'>{props.houseName}</h4>



        <img className="greenhouse-preset-button" src="https://via.placeholder.com/200x200?text=Preset" alt="greenhouse-preset" onClick={()=>setPresetLoaded(!presetLoaded)}/>
      
              

      </div>
      
      <SoundMixer soundSelection={props.soundSelection} presetLoaded={presetLoaded} setPresetLoaded={setPresetLoaded}/>
  
  </div>
  )
  }

export default Greenhouse;
