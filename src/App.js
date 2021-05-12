import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Spotlight from "./pages/Spotlight/Spotlight";
import Search from "./pages/Search/Search";
import { Button } from "./Components/Button";
import { Container } from "./Components/Container";
import BookItem from "./Components/BookItem";

export default function App() {
  return (
    <Router>
      <Container place="center" padding="20px" gap="50px" columns="1fr 1fr">
        <Button>Button</Button>
        <Button>Button</Button>
      </Container>
      <Container gap="100px">
        <Container place="center">
          <BookItem height="100%" width="80%" />
        </Container>
        <Container place="center"></Container>
      </Container>
      <Spotlight />
    </Router>
  );
}
