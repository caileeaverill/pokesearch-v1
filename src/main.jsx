import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MainNav from "./components/Nav/NavRoutes";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainNav />
  </BrowserRouter>
);