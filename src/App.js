import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Contactme from "./Components/Contactme/Contactme";

import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <Home title="Section 1" subtitle={dummyText} dark={true} id="home" />
          <About
            title="Section 2"
            subtitle={dummyText}
            dark={false}
            id="about"
          />
          <Portfolio dark={true} id="portfolio" />
          <Skills dark={false} id="skills" />
          <Contactme dark={true} id="contact" />
        </div>
      </div>
    );
  }
}

export default App;
