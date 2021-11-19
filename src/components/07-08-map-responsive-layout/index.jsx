import floorMap from './images/map.png'
import './styles.css'
import { BrowserRouter as Link } from "react-router-dom";



function Map () {

    const myFunction = (message) => {
        console.log(message);
      };    

      {/*pass the name of the route with myFunction instead of message*/}

    return (
        <div className="MapBody">
        <div className="Map">
            <div id="floor_map">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1280 692">
                    
                    <image width="1280" height="692" href={floorMap}>
                        <title>Botanical Garden Berlin Greenhouses Map</title>
                    </image>

                    <Link to="/HouseA_Tropical">
                        <polyline onClick={() => myFunction("You clicked House A")} className="House" id="A_House" points="320,27,321,65,336,78,330,83,330,200,337,207,328,215,328,258,361,258,374,243,384,255,692,256,702,243,712,254,760,254,759,214,743,201,752,193,752,80,747,74,756,66,756,19,719,19,705,34,694,21,650,23,651,-1,642,-1,641,12,629,12,630,-1,622,-1,621,22,390,23,376,36,367,27,320,27" />
                    </Link>

                    <Link to="/HouseB_Aroids">
                        <polyline onClick={() => myFunction("You clicked House B")}className="House" id="B_House" points="753,88,753,187,937,185,938,87,753,88" />
                    </Link>

                    <Link to="/HouseC_TropicalCrops">
                        <rect onClick={() => myFunction("You clicked House C")}className="House" id="C_House" x="938" y="62" width="145" height="150" />
                    </Link>

                    <Link to="/HouseD_Orchids">
                        <rect onClick={() => myFunction("You clicked House D")}className="House" id="D_House" x="980" y="213" width="60" height="220" />
                    </Link>    

                    <Link to="/HouseN_Camellias">
                        <rect onClick={() => myFunction("You clicked House N")}className="House" id="N_House" x="146" y="88" width="184" height="97" />
                    </Link>

                    <Link to="/HouseM_Australia">
                        <rect onClick={() => myFunction("You clicked House M")}className="House" id="M_House" x="1" y="62" width="144" height="150" />
                    </Link>

                    <Link to="/HouseL_CarnivorousPlants">
                        <rect onClick={() => myFunction("You clicked House L")}className="House" id="L_House" x="53" y="213" width="60" height="221" />
                    </Link>

                    <Link to="/HouseK_SouthAfrica">
                        <polyline onClick={() => myFunction("You clicked House K")}className="House" id="K_House" points="41,434,41,581,46,588,56,596,69,600,69,616,94,616,94,600,105,595,117,588,126,578,125,434,41,434"/>
                    </Link>

                    <Link to="/HouseI_Cacti">    
                        <polyline onClick={() => myFunction("You clicked House I")}className="House" id="I_House" points="127,456,127,578,137,578,152,562,158,562,171,570,189,577,210,580,233,577,248,571,262,563,269,562,284,577,295,577,295,455,127,456"/>
                    </Link>

                    <Link to="/HouseH_AfricanSucculents">    
                        <polyline onClick={() => myFunction("You clicked House H")}className="House" id="H_House" points="295,433,295,580,304,589,314,596,324,600,325,616,350,616,350,600,362,596,374,586,382,577,382,433,295,433"/>
                    </Link>

                    <Link to="/HouseG_Bromeliads">
                        <polyline onClick={() => myFunction("You clicked House G")}className="House" id="G_House" points="698,433,698,580,707,589,717,596,727,600,728,616,753,616,753,600,767,595,777,586,785,577,785,433, 698, 433"/>
                    </Link>

                    <Link to="/HouseE_Rainforest">
                        <polyline onClick={() => myFunction("You clicked House E")}className="House" id="E_House" points="966,433,966,580,975,589,985,596,995,600,996,616,1021,616,1021,600,1035,595,1045,586,1054,578,1053,433,966,433"/>
                    </Link>

                    <Link to="/HouseF_Ferns">
                        <polyline onClick={() => myFunction("You clicked House F")}className="House" id="F_House" points="785,455,786,578,797,578,812,562,820,562,833,570,853,577,876,580,897,578,916,571,932,562,940,563,955,578,967,579,966,455,785,455"/>
                    </Link>

                    <Link to="/HouseO_VictoriaLilies">
                        <polyline onClick={() => myFunction("You clicked House O")}className="House" id="O_House" points="470,288,469,434,382,434,382,478,417,479,423,503,433,527,451,550,473,568,495,579,521,586,521,607,531,607,531,596,543,596,543,607,552,607,552,586,573,582,594,573,612,561,629,544,642,524,652,503,656,478,698,478,698,433,603,433,601,288"/>
                    </Link>

                    <Link to="/HouseP_Mediterranean">
                        <polyline onClick={() => myFunction("You clicked House P")}className="House" id="P_House" points="1189,355,1161,391,1160,668,1167,668,1167,685,1187,685,1187,669,1203,669,1203,691,1212,691,1212,680,1223,680,1223,691,1233,691,1233,669,1246,669,1246,685,1268,685,1268,669,1279,669,1279,390,1256,354"/>
                    </Link>

                </svg>
            </div>
        </div>
    </div>
    )
}

export default Map;