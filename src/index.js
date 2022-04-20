import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./mainpage/mainpage.js";
import MainPage from "./mainpage/mainpage.js";
import "./all.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
  rootElement
);
