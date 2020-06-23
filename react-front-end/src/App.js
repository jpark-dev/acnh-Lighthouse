import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

import { Link, Route, Switch } from "react-router-dom";


function App() {
  return (
    <main>
      <Header />
      <Body />
      <Footer />
      <Switch>
        <Route path="/header" component={Header} />

        {/* <Route component={ErrorComponent} /> */}
      </Switch>
    </main>
  );
}

export default App;
