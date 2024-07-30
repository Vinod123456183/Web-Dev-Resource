// App.jsx
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
