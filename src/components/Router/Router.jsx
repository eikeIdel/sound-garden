import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Greenhouse from '../greenhouse/greenhouse';
import Welcome from '../welcome/welcome';
import Map from '../07-08-map-responsive-layout';

export default function Navigation() {
    return (
        <Router>
            {/* < Link to="/">Welcome</Link>
             <br/>
            < Link to="/HouseA_Tropical">House A - Tropical</Link>
            <br/>
            < Link to="/HouseB_Aroids">House B - Aroids</Link> */}
            

            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
            
                <Route path="/Map">
                    <Map/>
                </Route>

                {/* START ROUTE FOR GREENHOUSES */}

                <Route path="/HouseA_Tropical">
                <Greenhouse houseName='House A - Tropical' soundSelection = {['thunder','rain','bird','wind','monkey','jungle']}/>
                </Route>

                <Route path="/HouseB_Aroids">
                <Greenhouse houseName='House B - Aroids' soundSelection = {['rain','river','wildlife','thunder']}/>            
                </Route>

                <Route path="/HouseC_TropicalCrops">
                <Greenhouse houseName='House C - TropicalCrops' soundSelection = {['rain','bird','wind','jungle','monkey']}/>              
                </Route>
                
                <Route path="/HouseD_Orchids">
                <Greenhouse houseName='House D - Orchids' soundSelection = {['rain','bird','wind','monkey','crickets']}/>          
                </Route>

                <Route path="/House_Rainforest">
                <Greenhouse houseName='House E - Rainforest' soundSelection = {['rain','jungle','wind','monkey','thunder','bird']}/>               
                </Route>

                <Route path="/HouseF_Ferns">
                <Greenhouse houseName='House F - Ferns' soundSelection = {['rain','bird','river','wildlife']}/>               
                </Route>

                <Route path="/HouseG_Bromeliads">
                <Greenhouse houseName='House G - Bromeliads' soundSelection = {['rain','wind','river','bird',]}/>               
                 </Route>

                <Route path="/HouseH_AfricanSucculents">
                <Greenhouse houseName='House H - AfricanSucculents' soundSelection = {['wildlif','bird','wind','crickets']}/>                
                </Route>

                <Route path="/HouseI_Cacti">
                <Greenhouse houseName='House I - Cacti' soundSelection = {['crickets','wind',"fields","bird"]}/>                
                </Route>

                <Route path="/HouseK_SouthAfrica">
                <Greenhouse houseName='House K - SouthAfrica' soundSelection = {['thunder','duck','wind','monkey']}/>                
                </Route>

                <Route path="/HouseL_CarnivorousPlants">
                <Greenhouse houseName='House L - CarnivorousPlants' soundSelection = {['fields','bird','wind','river']}/>                
                </Route>

                <Route path="/HouseM_Australia">
                <Greenhouse houseName='House M - Australia' soundSelection = {['rain','bird','wind','monkey','crickets']}/>               
                 </Route>

                <Route path="/HouseN_Camellias">
                <Greenhouse houseName='House N - Camellias' soundSelection = {['wildlife','bird','wind','river']}/>               
                 </Route>

                <Route path="/HouseO_VictoriaLilies">
                <Greenhouse houseName='House O - VictoriaLilies' soundSelection = {['rain','duck','wind','monkey']}/>               
                </Route>

                <Route path="/HouseP_Mediterranean">
                <Greenhouse houseName='HouseP  - Mediterranean' soundSelection = {['rain','bird','wind','duck','waves']}/>                
                </Route>

            

            </Switch>
        </Router>
    )
}