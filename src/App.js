import './App.scss';
import React from "react";

import StepsManager from "../src/components/StepsManager/StepsManager"
import StepsViewer from "../src/components/StepsViewer/StepsViewer"

function App() {
    return (
        <div className="App">
            <h2 className="training-title">Training</h2>
            <div className={"container"}>
                <div>
                    <StepsManager/>
                </div>
                <StepsViewer/>
            </div>
        </div>
    );
}

export default App;
