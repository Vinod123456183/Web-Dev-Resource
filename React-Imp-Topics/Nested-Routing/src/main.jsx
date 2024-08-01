import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MsgContact from "./pages/MsgContact.jsx";
import DropContact from "./pages/DropContact.jsx";

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
      <Route path="contact" element={<Contact />}>
        {/* Creating Nested Route Because We created Buttons Inside That */}
        {/* // slash toh dena hi nahi h */}
        {/* Immportant Note path me {}   nahi lagana  */}
        {/* Close Route </Route> */}
        {/* Element krte time WE can use {<Component/>} */}
        <Route path="contact-us" element={<DropContact />} />
        <Route path="msgcontact" element={<MsgContact />} />
      </Route>
        {/* Ab YahanPr </   Route  >  ese use nahi kiya h blki <Route />  ese Use Kiya h Becaue y Behaving as Componenet*/}
        {/* Yahan pr hum component bna k kr skte h */}
        
      <Route path="*" element = {<><h1> Page Not Found  </h1></>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
