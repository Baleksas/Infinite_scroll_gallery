import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // Unused react strict mode due to duplicate fetching
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

reportWebVitals();
