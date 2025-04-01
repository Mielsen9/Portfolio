import React from "react";
import * as s from "./App.module.scss";
import Header from "@/widgets/Header/Header";
import Intro from "@/widgets/Intro/Intro";

// App
const App:React.FC = () => {
    return (
        <div>
            <Header/>
            <Intro/>
        </div>
    );
};

export default App;
