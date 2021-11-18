import SoundMixer from "./sound-mixer/sound-mixer";
import './greenhouse.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState,useEffect,createContext } from "react";
import Returnbttn from "./button-icons/return-bttn2.png"
import Resetbttn from "./button-icons/reset-bttn.png"
import Presetbttn from "./button-icons/preset-bttn.png"
 

// import BGImage from "./bg-visual/background-image.js";


function Greenhouse(props) { 
  //props are declared in ../Router/router.jsx
  const [presetLoaded,setPresetLoaded] = useState(false);
  const [soundReset,setSoundReset] = useState(false);
  const [greenhousePresets,setGreenhousePresets] = useState([]);

//  const GreenhouseContext = createContext(null);

  useEffect(() => {
    fetch(`http://localhost:8000/house-config/${props.greenhouseId}`)
    .then(res => res.json())
    .then(json => {
      
        setGreenhousePresets(json);
    })
  },[])
  return(
    // <GreenhouseContext.Provider value={{
    //   greenhousePresets:greenhousePresets
    // }}>
    <div className='greenhouse-main'>
      
      <div className="greenhouse-head">
        <Link to="/Map">
        <img 
        className="greenhouse-return-button" 
        src={Returnbttn} 
        alt="greenhouse-return"
          
        
        />
         </Link>
        <h4 className='house-name'>{greenhousePresets[0]?.greenhouse_name}</h4>

        
        <img className="greenhouse-reset-button" src={Resetbttn} alt="greenhouse-reset" onClick={()=>setSoundReset(true)}/>
       

        <img className="greenhouse-preset-button" src={Presetbttn} alt="greenhouse-preset" onClick={()=>setPresetLoaded(true)}/>
      
              

      </div>
      
      <SoundMixer  presetLoaded={presetLoaded} setPresetLoaded={setPresetLoaded} soundReset={soundReset} setSoundReset={setSoundReset} greenhouseId={props.greenhouseId} greenhousePresets={greenhousePresets}/>
  
  </div>
  // </GreenhouseContext.Provider>
  )
  }

export default Greenhouse;

