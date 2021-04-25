import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Navbar";
import Skill from "./Skill";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/skills" component={Skill} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
