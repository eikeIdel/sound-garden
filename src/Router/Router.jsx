import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Router() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Welcome/>
                </Route>
            
                <Route exact path="/Map">
                    <Map/>
                </Route>

                <Route exact path="/HouseA_Tropical">
                    <HouseATropical/>
                </Route>
                <Route exact path="/HouseB_Aroids">
                    <HouseBAroids/>
                </Route>
                <Route exact path="/HouseC_TropicalCrops">
                    <HouseCTropicalCrops/>
                </Route>
                <Route exact path="/HouseD_Orchids">
                    <HouseDOrchids/>
                </Route>
                <Route exact path="/House_Rainforest">
                    <HouseRainforest/>
                </Route>
                <Route exact path="/HouseF_Ferns">
                    <HouseFFerns/>
                </Route>
                <Route exact path="/HouseG_Bromeliads">
                    <HouseGBromeliads/>
                </Route>
                <Route exact path="/HouseH_AfricanSucculents">
                    <HouseHAfricanSucculents/>
                </Route>
                <Route exact path="/HouseI_Cacti">
                    <HouseICacti/>
                </Route>
                <Route exact path="/HouseK_SouthAfrica">
                    <HouseKSouthAfrica/>
                </Route>
                <Route exact path="/HouseL_CarnivorousPlants">
                    <HouseLCarnivorousPlants/>
                </Route>
                <Route exact path="/HouseM_Australia">
                    <HouseMAustralia/>
                </Route>
                <Route exact path="/HouseN_Camellias">
                    <HouseNCamellias/>
                </Route>
                <Route exact path="/HouseO_VictoriaLilies">
                    <HouseOVictoriaLilies/>
                </Route>
                <Route exact path="/HouseP_Mediterranean">
                    <HousePMediterranean/>
                </Route>

                <Route exact path="/Quiz">
                    <Quiz/>
                </Route>

                <Route exact path="/Backend">
                    <Backend/>
                </Route>

            </Switch>
        </Router>
    )
}