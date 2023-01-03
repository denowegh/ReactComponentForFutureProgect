import React from "react";
import "./App.css";
import MyHeader from "./components/MyHeader/MyHeader";
import MyButtonSkew from "./components/MyButtonSkew/MyButtonSkew";
import MyInput from "./components/MyInput/MyInput";

function App() {
    return (
        <div className="App">
            <MyHeader className="divHeader" />
            <MyButtonSkew className="positionButton">My Button</MyButtonSkew>
            <MyInput placeholder="ggg" className="" />
        </div>
    );
}

export default App;
