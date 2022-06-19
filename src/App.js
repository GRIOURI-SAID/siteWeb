import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeOne from "./pages/Home";




import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";


function App() {
  return (
    <Router>

      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={HomeOne}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/home-one"}`}
          component={HomeOne}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={About}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/contact"}`}
          component={Contact}
        />

        <Route
          path={process.env.PUBLIC_URL + "/not-found"}
          component={NotFound}
        />
        <Route exact component={NotFound} />
      </Switch>

    </Router >
  );
}

export default App;
