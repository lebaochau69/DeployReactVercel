import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
