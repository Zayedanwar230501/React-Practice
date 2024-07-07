import React from "react"
import ReactDOM from "react-dom"

let heading1=React.createElement("h1",{},"This is heading");
let heading2=React.createElement("h2",{},"This is heading2");
let heading=React.createElement("div",{id:"container"},[heading1,heading2]);
let root=ReactDOM.createRoot(document.getElementById("container"));
root.render(heading);