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

const userList = [
    {
        name: "test-1",
        value: 50,
        date: "2019-02-15",
    },
    {
        name: "test-2",
        value: 10,
        date: "2015-12-20",
    },
    {
        name: "test-3",
        value: 55,
        date: "2018-02-29",
    },
    {
        name: "test-4",
        value: 30,
        date: "2017-05-13",
    },
    {
        name: "test-5",
        value: 42,
        date: "2023-09-25",
    },
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App slides={data} userList={userList} />
    </React.StrictMode>
);
