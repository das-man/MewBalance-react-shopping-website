import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import { ContextProvider } from "./context/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/:category?",
        element: <Shoes />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
