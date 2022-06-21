import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeOne from "./pages/Home";




import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Account from "./pages/Account";
import DetailsModule from "./pages/DetailsModule";


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

          path={`${process.env.PUBLIC_URL + "/admin"}`}
          component={Admin}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={About}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/module/:id"}`}
          component={DetailsModule}
        />



        <Route
          path={`${process.env.PUBLIC_URL + "/contact"}`}
          component={Contact}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/users"}`}
          component={User}
        />


        <Route
          path={`${process.env.PUBLIC_URL + "/myaccount"}`}
          component={Account}
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
