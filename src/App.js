import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
