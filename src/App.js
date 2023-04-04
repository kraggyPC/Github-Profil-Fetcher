import React from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        // element: <About />,
      },
      {
        path: "/",
        element: <SearchBar />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default App;
