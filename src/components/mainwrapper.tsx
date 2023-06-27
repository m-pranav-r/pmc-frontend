import { FC } from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./nav";
import { Routes } from "react-router";

const Test0: FC = () => {
    return <h1>Test</h1>
}

const Test1: FC = () => {
    return <h1>Test1</h1>
}

const Test2: FC = () => {
    return <h1>Test2</h1>
}

export const MainWrapper: FC = () => {
    return (
        <div className="main-wrapper">
            <NavBar />
            <Routes>
                <Route path="/" element={<Test0 />}></Route>
                <Route path="/test" element={<Test1 />}></Route>
                <Route path="/back" element={<Test2 />}></Route>
            </Routes>
        </div>
    );
}