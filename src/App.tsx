import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components";

function App() {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  );
}

export default App;
