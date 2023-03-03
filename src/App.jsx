import { useState } from "react";
import "./App.css";
import DataList from "./components/DataList";
import Slides from "./components/Slides";

function App({ slides, userList }) {
    const [data, setData] = useState(userList);

    const value = () => {
        const temp = data.sort((p1, p2) =>
            p1.value < p2.value ? 1 : p1.value > p2.value ? -1 : 0
        );

        // spreed the data in the same formate to
        // parent component rerender.
        setData([...temp]);
    };

    const date = () => {
        const temp = data.sort(
            (p1, p2) => new Date(p2.date) - new Date(p1.date)
        );

        // spreed the data in the same formate to
        // parent component rerender.
        setData([...temp]);
    };

    return (
        <div className="App">
            {/* <Slides slides={slides} /> */}

            <div className="btnGrp">
                <button onClick={value}>sort by value</button>
                <button onClick={date}>sort by Date</button>
            </div>

            <DataList userList={data} />
        </div>
    );
}

export default App;
