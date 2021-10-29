import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Greenhouse from '../components/greenhouse/greenhouse';
import Welcome from '../components/welcome';

export default function Navigation() {
    return (
        <Router>
            < Link to="/HouseA_Tropical">HouseA - Tropical</Link>
            < Link to="/HouseB_Aroids">HouseA - Tropical</Link>
            

            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
            
                {/* <Route exact path="/Map">
                    <Map/>
                </Route> */}

                {/* START ROUTE FOR GREENHOUSES */}

                <Route exact path="/HouseA_Tropical">
                <Greenhouse houseName='HouseA_Tropical' soundSelection = {['rain','bird','wind','monkey']}/>
                </Route>
                <Route exact path="/HouseB_Aroids">
                <Greenhouse houseName='HouseB_Aroids' soundSelection = {['rain','wind','monkey']}/>                </Route>
                <Route exact path="/HouseC_TropicalCrops">
                <Greenhouse houseName='HouseC_TropicalCrops' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseD_Orchids">
                <Greenhouse houseName='HouseD_Orchids' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/House_Rainforest">
                <Greenhouse houseName='House_Rainforest' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseF_Ferns">
                <Greenhouse houseName='HouseF_Ferns' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseG_Bromeliads">
                <Greenhouse houseName='HouseG_Bromeliads' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseH_AfricanSucculents">
                <Greenhouse houseName='HouseH_AfricanSucculents' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseI_Cacti">
                <Greenhouse houseName='HouseI_Cacti' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseK_SouthAfrica">
                <Greenhouse houseName='HouseK_SouthAfrica' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseL_CarnivorousPlants">
                <Greenhouse houseName='HouseL_CarnivorousPlants' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseM_Australia">
                <Greenhouse houseName='HouseM_Australia' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseN_Camellias">
                <Greenhouse houseName='HouseN_Camellias' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseO_VictoriaLilies">
                <Greenhouse houseName='HouseO_VictoriaLilies' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>
                <Route exact path="/HouseP_Mediterranean">
                <Greenhouse houseName='HouseP_Mediterranean' soundSelection = {['rain','bird','wind','monkey']}/>                </Route>

            

            </Switch>
        </Router>
    )
}