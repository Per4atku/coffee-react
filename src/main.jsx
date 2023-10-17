import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./__reset.scss";
import "./__vars.scss";
import "./__fonts.scss";
import "./__global.scss";
import "./__animations.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
