import React, { useState, useEffect } from "react";
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
import { Planets } from "react-preloaders";
import StartLoader from "./components/StartLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/users")
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        
    const sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
      })
      .catch(err => {
        console.log(err);
        
      });

  }, []);

  return (
      <>
      {loading ? <StartLoader />  : 
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
  }
  </>
  );
};

export default App;
