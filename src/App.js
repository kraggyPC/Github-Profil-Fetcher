import React from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
