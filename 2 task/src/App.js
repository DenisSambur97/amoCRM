import React, {useEffect, useState} from "react";
import './App.sass';
import Header from "./components/Header/header";
import Circle from "./components/Circle/circle";
import MainContent from "./components/MainContent/mainContent";
import Footer from "./components/Footer/footer";
import HeaderMobile from "./components/HeaderMobile/headerMobile";

function App() {
    const [currentWindowWidth, setCurrentWindowWidth] = useState(window.innerWidth)
    // Ф-ция обновление значения в котором находится width
    function updateCurrentWindowWidth() {
        setCurrentWindowWidth(window.innerWidth)
    }
    // Подписка на изменения
    useEffect(() => {
        window.addEventListener("resize", updateCurrentWindowWidth)
        return () => window.removeEventListener("resize", updateCurrentWindowWidth)
    })

    return (
        <div className="App">
            {currentWindowWidth < 780 ? <HeaderMobile/> : <Header/>}
            <Circle/>
            <MainContent width={currentWindowWidth}/>
            <Footer width={currentWindowWidth}/>
        </div>

    );
}

export default App;
