import React, { Component, useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Generic from "./components/Generic";

import store from "./redux/store";
import { Provider } from "react-redux";
import Spinner from "./components/Spinner";
import axios from "axios";
import { Planets } from "react-preloaders";

import { proxyURL } from "./auth/secret";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => {
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });

    const sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/spinner" component={Spinner} />
            <Route path="/:generic_site" component={Generic} />
          </Switch>
          <Planets customLoading={loading} background="#141420" color={'#f7f7f7'} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
