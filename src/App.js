import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

function App() {
  return (
    <Router>
        <div className="App-container">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Projects} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
  );
}

export default App;
