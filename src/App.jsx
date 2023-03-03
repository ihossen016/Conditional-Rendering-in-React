import "./App.css";
import DataList from "./components/DataList";
import Slides from "./components/Slides";

function App({ slides, userList }) {
    return (
        <div className="App">
            {/* <Slides slides={slides} /> */}

            <div className="btnGrp">
                <button>sort by value</button>
                <button>sort by Date</button>
            </div>

            <DataList userList={userList} />
        </div>
    );
}

export default App;
