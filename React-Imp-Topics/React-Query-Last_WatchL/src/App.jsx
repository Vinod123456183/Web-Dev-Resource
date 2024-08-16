import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home' ; // Import your Home component here
import Product from './Components/Product';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
