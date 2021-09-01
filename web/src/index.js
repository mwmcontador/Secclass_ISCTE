import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import "./styles/app.css";
import Routes from "./routes";

console.log("1 ");
ReactDOM.render(<Routes />, document.getElementById("root"));
console.log("2 ");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.timeLog());
