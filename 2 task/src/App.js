import React from "react";
import './App.sass';
import Header from "./components/Header/header";
import Circle from "./components/Circle/circle";
import MainContent from "./components/MainContent/mainContent";

function App() {
    return (
        <div className="App">
            <Header/>
            <Circle/>
            <MainContent/>
        </div>

    );
}

export default App;
