import React, { Component } from "react";
import CoreValues from "./corevalues.js";
import Terms from "./terms.js";
import Privacy from "./privacy.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const AboutUs = () =>
    <Router>
    <div>
    <Switch>
    <Route exact path="/core-values" component={CoreValues}/>
    <Route exact path="/privacy" component={Privacy}/>
    <Route exact path="/terms" component={Terms}/>
    </Switch>
    </div>
    </Router>;

export default AboutUs;
