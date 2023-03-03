import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const data = [
    {
        title: "this is title-1",
        text: "text for title-1",
    },
    {
        title: "this is title-2",
        text: "text for title-2",
    },
    {
        title: "this is title-3",
        text: "text for title-3",
    },
    {
        title: "this is title-4",
        text: "text for title-4",
    },
    {
        title: "this is title-5",
        text: "text for title-5",
    },
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App slides={data} />
    </React.StrictMode>
);
