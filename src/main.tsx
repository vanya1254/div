import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/store.ts";

import App from "./App.tsx";

import "./index.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root elementnot found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
