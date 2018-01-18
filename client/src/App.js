import React from "react";
import LandingPage from "./pages/landingpage";
import AboutUs from "./pages/aboutus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
    <Router>
    <div>
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/core-values" component={AboutUs}/>
    <Route exact path="/privacy" component={AboutUs}/>
    </Switch>
    </div>
    </Router>;

export default App;
