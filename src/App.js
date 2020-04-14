import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
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
