import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Use react-router-dom
import "./index.css";
import MainNav from "./components/Nav/NavRoutes";  // ✅ Import MainNav (handles routes)

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainNav />
  </BrowserRouter>
);