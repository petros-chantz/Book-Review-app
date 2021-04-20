import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import Home from './pages/Home/Home';
import Search from "./pages/Search";
import Sportlight from "./pages/Spotlight";
import './styles/App.css';

export default function App() {
  return (
    <Router>
      <Home />
      {/* <Search /> */}
      <Favourites />
      {/* <Sportlight /> */}
      <Contact/>
    </Router>

  );
}


