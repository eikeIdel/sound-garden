import React from "react";
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
                <Greenhouse houseName='House A - Tropical' soundSelection = {[{thunder:0.5},{rain:0.2},{bird:0.6},{wind:0.1},{monkey:0.3},{jungle:1}]}/>
                </Route>

                <Route path="/HouseB_Aroids">
                <Greenhouse houseName='House B - Aroids' soundSelection = {[{rain:0.1},{river:0.6},{wildlife:0.2},{thunder:0}]}/>            
                </Route>

                <Route path="/HouseC_TropicalCrops">
                <Greenhouse houseName='House C - TropicalCrops' soundSelection = {[{rain:0},{bird:0.7},{wind:0.3},{jungle:0.7},{monkey:0.4}]}/>              
                </Route>
                
                <Route path="/HouseD_Orchids">
                <Greenhouse houseName='House D - Orchids' soundSelection = {[{rain:0.2},{bird:0.7},{wind:0},{monkey:0},{crickets:0.7}]}/>          
                </Route>

                <Route path="/House_Rainforest">
                <Greenhouse houseName='House E - Rainforest' soundSelection = {[{rain:0},{jungle:0.7},{wind:0.3},{monkey:0.4},{thunder:0.2},{bird:0.1}]}/>               
                </Route>

                <Route path="/HouseF_Ferns">
                <Greenhouse houseName='House F - Ferns' soundSelection = {[{rain:0.2},{bird:0},{river:0.6},{wildlife:0.2}]}/>               
                </Route>

                <Route path="/HouseG_Bromeliads">
                <Greenhouse houseName='House G - Bromeliads' soundSelection = {[{rain:0.2},{wind:0.3},{river:0.2},{bird:0},]}/>               
                 </Route>

                <Route path="/HouseH_AfricanSucculents">
                <Greenhouse houseName='House H - AfricanSucculents' soundSelection = {[{wildlife:0.6},{bird:0.3},{wind:0.1},{crickets:0.1}]}/>                
                </Route>

                <Route path="/HouseI_Cacti">
                <Greenhouse houseName='House I - Cacti' soundSelection = {[{crickets:0.1},{wind:0.2},{fields:0.6},{bird:0.3}]}/>                
                </Route>

                <Route path="/HouseK_SouthAfrica">
                <Greenhouse houseName='House K - SouthAfrica' soundSelection = {[{thunder:0.1},{duck:0.7},{wind:0},{monkey:0}]}/>                
                </Route>

                <Route path="/HouseL_CarnivorousPlants">
                <Greenhouse houseName='House L - CarnivorousPlants' soundSelection = {[{fields:0.7},{bird:0.5},{wind:0},{river:0.2}]}/>                
                </Route>

                <Route path="/HouseM_Australia">
                <Greenhouse houseName='House M - Australia' soundSelection = {[{rain:0},{bird:0.4},{wind:0.6},{crickets:0.3}]}/>               
                 </Route>

                <Route path="/HouseN_Camellias">
                <Greenhouse houseName='House N - Camellias' soundSelection = {[{wildlife:0.7},{bird:0},{wind:0.2},{river:0.5}]}/>               
                 </Route>

                <Route path="/HouseO_VictoriaLilies">
                <Greenhouse houseName='House O - VictoriaLilies' soundSelection = {[{rain:0.3},{duck:0.6},{wind:0.2},{monkey:0}]}/>               
                </Route>

                <Route path="/HouseP_Mediterranean">
                <Greenhouse houseName='HouseP  - Mediterranean' soundSelection = {[{rain:0},{bird:0.5},{wind:0.4},{duck:0.6},{waves:0.8}]}/>                
                </Route>

            

            </Switch>
        </Router>
    )
}