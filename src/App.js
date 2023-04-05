import React from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Analytics from "./components/Analytics";
const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Analytics />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
