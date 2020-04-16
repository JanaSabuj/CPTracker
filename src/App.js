import React, { Component } from "react";
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

class App extends Component {
  componentDidMount() {
    const sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});

    console.log(Date());
  }

  render() {
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
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
