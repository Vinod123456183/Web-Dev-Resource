// App.jsx
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Product from "./Product";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
