import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainParent from "./components/MainParent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainParent />
  </StrictMode>
);
