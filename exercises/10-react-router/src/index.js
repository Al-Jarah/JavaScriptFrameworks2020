/**
 * You will need to wrap React Router around your app.
 * Setup this page so that it is the same as "src/index.js" here
 * @see https://codesandbox.io/s/react-router-vij9b?fontsize=14&hidenavigation=1&theme=dark
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; 
import App from "./components/App/App";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
