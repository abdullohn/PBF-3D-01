import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header1 from "./parts/Header1";
import Header2 from "./parts/Header2";
import Header3 from "./parts/Header3";
import Footer from "./parts/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/">
          <Header1 />
          <Home />
        </Route>
        <Route path="/products">
          <Header2 />
          <Products />
        </Route>
        <Route path="/services">
          <Header1 />
          <Services />
        </Route>
        <Route path="/gallery">
          <Header3 />
          <Gallery />
        </Route>
        <Route path="/contact">
          <Header1 />
          <Contact />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;