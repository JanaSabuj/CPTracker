import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";

import Navbar from "./components/Navbar";
import About from "./components/About";

class App extends Component {
  componentDidMount() {
    const sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
