import React from "react";
import "./App.css";
import CitySrc from "./components/CitySrc";
import Header from "./components/Header.js";
import WeatherChart from "./components/Chart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <CitySrc />
        </Route>
        <Route path="/:cityId" component={WeatherChart} />
      </Switch>
    </Router>
  );
}

export default App;
