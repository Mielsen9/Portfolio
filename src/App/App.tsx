import React from "react";
import * as s from "./App.module.scss";
import Header from "@/widgets/Header/Header";

// App
const App:React.FC = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
        </div>
    );
};

export default App;
