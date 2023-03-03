import { useState } from "react";
import "./App.css";
import DataList from "./components/DataList";
import Slides from "./components/Slides";

function App({ slides, userList }) {
    const [data, setData] = useState(userList);

    const value = () => {
        setData(
            data.sort((p1, p2) =>
                p1.value < p2.value ? 1 : p1.value > p2.value ? -1 : 0
            )
        );
        console.log(data);
    };

    return (
        <div className="App">
            {/* <Slides slides={slides} /> */}

            <div className="btnGrp">
                <button onClick={value}>sort by value</button>
                <button>sort by Date</button>
            </div>

            <DataList userList={data} />
        </div>
    );
}

export default App;
