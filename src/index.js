import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App5 from "./App5";
import Login from "./Login";

const sqrfunction = (n) =>{
    return n*n;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App flag={false} />);
// root.render(<App5 name="Cathy"/>);
root.render(<App14 result={{'John': 40 , 'Cathy' : 50}}/>)