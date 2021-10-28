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
                    <HouseA_Tropical/>
                </Route>
                <Route exact path="/HouseB_Aroids">
                    <HouseB_Aroids/>
                </Route>
                <Route exact path="/HouseC_TropicalCrops">
                    <HouseC_TropicalCrops/>
                </Route>
                <Route exact path="/HouseD_Orchids">
                    <HouseD_Orchids/>
                </Route>
                <Route exact path="/House_Rainforest">
                    <House_Rainforest/>
                </Route>
                <Route exact path="/HouseF_Ferns">
                    <HouseF_Ferns/>
                </Route>
                <Route exact path="/HouseG_Bromeliads">
                    <HouseG_Bromeliads/>
                </Route>
                <Route exact path="/HouseH_AfricanSucculents">
                    <HouseH_AfricanSucculents/>
                </Route>
                <Route exact path="/HouseI_Cacti">
                    <HouseI_Cacti/>
                </Route>
                <Route exact path="/HouseK_SouthAfrica">
                    <HouseK_SouthAfrica/>
                </Route>
                <Route exact path="/HouseL_CarnivorousPlants">
                    <HouseL_CarnivorousPlants/>
                </Route>
                <Route exact path="/HouseM_Australia">
                    <HouseM_Australia/>
                </Route>
                <Route exact path="/HouseN_Camellias">
                    <HouseN_Camellias/>
                </Route>
                <Route exact path="/HouseO_VictoriaLilies">
                    <HouseO_VictoriaLilies/>
                </Route>
                <Route exact path="/HouseP_Mediterranean">
                    <HouseP_Mediterranean/>
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