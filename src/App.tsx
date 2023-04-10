import Container from "./components/Container";
import Gallery from "./components/Gallery";
import "./styles/App.css";

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
