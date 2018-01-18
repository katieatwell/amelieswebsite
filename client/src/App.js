import React from "react";
import LandingPage from "./pages/landingpage";
import CoreValues from "./pages/aboutus/corevalues";
import Privacy from "./pages/aboutus/privacy";
import Terms from "./pages/aboutus/corevalues";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
    <Router>
    <div>
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/core-values" component={CoreValues}/>
    <Route exact path="/privacy" component={Privacy}/>
    <Route exact path="/terms" component={Terms}/>
    </Switch>
    </div>
    </Router>;

export default App;
