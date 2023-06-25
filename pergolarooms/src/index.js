import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Font/Rubik-Bold/Rubik-Bold.ttf";
import "./Font/Rubik-ExtraBold/Rubik-ExtraBold.ttf";
import "./Font/Rubik-Light/Rubik-Light.ttf";
import "./Font/Rubik-Regular/Rubik-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
