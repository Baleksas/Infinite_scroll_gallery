import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <header></header>
      <Container>
        <Gallery />
      </Container>
    </div>
  );
}

export default App;
