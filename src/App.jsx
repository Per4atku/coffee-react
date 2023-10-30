import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Menu from "./pages/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <Helmet>
          <title>Cotask Coffee</title>
        </Helmet>
        <About />
      </React.Fragment>
    ),
  },
  {
    path: "/menu",
    element: (
      <React.Fragment>
        <Helmet>
          <title>Cotask Coffee - Menu</title>
        </Helmet>
        <Menu />
      </React.Fragment>
    ),
  },
  {
    path: "/delivery",
    element: (
      <React.Fragment>
        <Helmet>
          <title>Cotask Coffee - Delivery</title>
        </Helmet>
        <Delivery />
      </React.Fragment>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
