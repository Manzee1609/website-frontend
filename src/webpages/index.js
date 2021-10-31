import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Events from './events';
import Teams from './teams';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Events} />
            <Route exact path="/events" component= {Events} />
            <Route path = "/teams" component = {Teams} />
        </Router>
    );
};
export default Webpages;