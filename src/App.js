import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/skills" element={<Skills />} exact />
      <Route path="/portfolio" element={<Portfolio />} exact />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <Navbar />
      {routes}
    </BrowserRouter>
  );
}

export default App;
