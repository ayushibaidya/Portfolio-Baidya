import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

document.documentElement.classList.remove("no-js");

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

const normalizePath = (path) => path?.replace(/\/+$/, "") || "/";
if (
  root.hasChildNodes() &&
  normalizePath(root.dataset.route) === normalizePath(window.location.pathname)
)
  hydrateRoot(root, app);
else createRoot(root).render(app);
