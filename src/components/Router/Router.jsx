import React,{useState,createContext} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Greenhouse from '../greenhouse/greenhouse';
import Welcome from '../welcome/welcome';
import Map from '../07-08-map-responsive-layout';

export default function Navigation() {
    

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
            
                <Route path="/Map">
                    <Map/>
                </Route>

                {/* START ROUTE FOR GREENHOUSES */}

                <Route path="/HouseA_Tropical">
                <Greenhouse greenhouseId='1' />
                </Route>

                <Route path="/HouseB_Aroids">
                <Greenhouse greenhouseId='2'/>            
                </Route>

                <Route path="/HouseC_TropicalCrops">
                <Greenhouse greenhouseId='3'/>              
                </Route>
                
                <Route path="/HouseD_Orchids">
                <Greenhouse greenhouseId='4'/>          
                </Route>

                <Route path="/HouseE_Rainforest">
                <Greenhouse greenhouseId='5'/>               
                </Route>

                <Route path="/HouseF_Ferns">
                <Greenhouse greenhouseId='6'/>               
                </Route>

                <Route path="/HouseG_Bromeliads">
                <Greenhouse greenhouseId='7'/>               
                 </Route>

                <Route path="/HouseH_AfricanSucculents">
                <Greenhouse greenhouseId='8'/>                
                </Route>

                <Route path="/HouseI_Cacti">
                <Greenhouse greenhouseId='9' />            
                </Route>

                <Route path="/HouseK_SouthAfrica">
                <Greenhouse greenhouseId='10'/>                
                </Route>

                <Route path="/HouseL_CarnivorousPlants">
                <Greenhouse greenhouseId='11'/>                
                </Route>

                <Route path="/HouseM_Australia">
                <Greenhouse greenhouseId='12'/>               
                 </Route>

                <Route path="/HouseN_Camellias">
                <Greenhouse greenhouseId='13'/>               
                 </Route>

                <Route path="/HouseO_VictoriaLilies">
                <Greenhouse greenhouseId='14'/>               
                </Route>

                <Route path="/HouseP_Mediterranean">
                <Greenhouse greenhouseId='15'/>                
                </Route>

            

            </Switch>
        </Router>
    )
}