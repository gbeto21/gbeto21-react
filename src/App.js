import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio';

function App() {

  let routes = (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/skills" element={<Skills />} exact />
      <Route path="/portfolio" element={<Portfolio />} exact />
    </Routes>
  )

  return (
    <BrowserRouter>
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }} /> */}
      <Navbar />
      {routes}
    </BrowserRouter>

  );
}

export default App;
//rafce