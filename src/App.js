import React from "react";

import Home from "./pages/Home";
import Singleroom from "./pages/Singleroom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Navbar from "./component/Navbar";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slot" component={Singleroom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
