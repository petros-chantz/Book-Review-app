import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Spotlight from "./pages/Spotlight/Spotlight";
import Search from "./pages/Search/Search";
import Favourites from "./pages/Favourites/Favourites";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Router>
      <Home />
      <Spotlight />
      <Search />/
    </Router>
  );
}
