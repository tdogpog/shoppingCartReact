import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainParent from "./components/MainParent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainParent />,
    //nested routes
    //that render within mainparent layout
    //each child has path: url for route
    //element: component for this route
    //ex: /shop will render mainparent, within that, it
    //will render shoppage component
    children: [
      { path: "/", element: <Homepage /> },
      { path: "shop", element: <Shoppage /> },
      //dynamic route for ids of any item
      { path: "item/:id", element: <ItemDescriptionpage /> },
      { path: "checkout", element: <Checkoutpage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
