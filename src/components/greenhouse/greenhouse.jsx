import SoundMixer from "./sound-mixer/sound-mixer";
import './greenhouse.css'

function Greenhouse(props) { 
  //props are declared in ../Router/router.jsx
  
  return( 
    <div className='greenhouse-main'>
      
      <div className="greenhouse-head">
       
        <img 
        className="greenhouse-return-button" 
        src='https://via.placeholder.com/200x200?text=Return'  
        alt="greenhouse-return"
        onClick={() => alert('Return to overview map')}
          
        
        />
        <h4 className='house-name'>{props.houseName}</h4>

        <img className="greenhouse-preset-button" src="https://via.placeholder.com/200x200?text=Preset" alt="greenhouse-preset" onClick={()=>alert('load presets')}/>
      
      </div>
      
      <SoundMixer soundSelection={props.soundSelection}/>
  
  </div>
  )
  }

export default Greenhouse;
