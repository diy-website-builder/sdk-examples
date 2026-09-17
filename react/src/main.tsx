import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { keepHostAtRoot } from "./keepHostAtRoot";
import "./styles.css";

keepHostAtRoot();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
