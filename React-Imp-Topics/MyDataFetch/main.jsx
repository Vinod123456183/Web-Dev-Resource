import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home";
import Contact from "./pages/RoutingComponent/Contact.jsx";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/RoutingComponent/Shop.jsx";
import Collection from "./pages/RoutingComponent/Collection.jsx";
import Magazine from "./pages/RoutingComponent/Magazine.jsx";
import Pages from "./pages/RoutingComponent/Pages.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Define your routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

// Render your application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
