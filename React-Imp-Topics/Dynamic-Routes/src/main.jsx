import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MsgContact from "./pages/MsgContact.jsx";
import DropContact from "./pages/DropContact.jsx";
import Products from "./pages/Products.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} >
        {/* ?Dynamic Nested Route */}
        <Route path=":id" element = {<ProductDetails/>} />
      </Route>
      <Route path="contact" element={<Contact />}>
        <Route path="contact-us" element={<DropContact />} />
        <Route path="msgcontact" element={<MsgContact />} />
      </Route>

      <Route
        path="*"
        element={
          <>
            <h1> Page Not Found </h1>
          </>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
