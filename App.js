    import ReactDOM from "react-dom";
    
    import React from "react";
    import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World from Namaste React");
const parent = React.createElement("div", { id: "parent" }, heading);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(parent);
