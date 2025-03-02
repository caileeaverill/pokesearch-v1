import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App"; // ✅ Import App.jsx

createRoot(document.getElementById("root")).render(
  <App />
);