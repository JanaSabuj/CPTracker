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

class App extends Component {
  componentDidMount() {
    const sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});

    const addDays = (date, days) => {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    let d = new Date();
    console.log(Date("2019-10-20T18:30:00"), "harry");
    let dd = addDays(Date(), -180);
    console.log(dd);
    console.log("month", dd.getMonth() + 1);
    console.log("year", dd.getFullYear());
    console.log("day", dd.getDate());
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
              <Route path="/:generic_site" component={Generic} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
