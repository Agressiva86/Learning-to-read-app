import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "@fontsource/andika/latin-400.css";
import "@fontsource/andika/latin-ext-400.css";
import "@fontsource/andika/latin-700.css";
import "@fontsource/andika/latin-ext-700.css";
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/fraunces/latin-ext-600.css";
import "@fontsource/fraunces/latin-600-italic.css";
import "@fontsource/fraunces/latin-ext-600-italic.css";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Brak elementu #root");
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
