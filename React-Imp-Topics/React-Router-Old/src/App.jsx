import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1> Heading As NavBar </h1>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
