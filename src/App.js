import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './webpages/home';
import Events from './webpages/events';
import Teams from './webpages/teams';
import Blogs from './webpages/blogs';
import Contact from './webpages/contact';

function App() {
  return (
    <div>
      <Router>
            <Route exact path="/" component= {Home} />
            <Route exact path="/events" component= {Events} />
            <Route path = "/teams" component = {Teams} />
            <Route path = "/blogs" component = {Blogs} />
            <Route path = "/contact" component = {Contact} />
      </Router>
    </div>
  );
}
export default App;