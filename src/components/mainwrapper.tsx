import { FC } from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./nav";
import { Routes } from "react-router";
import { BaseWrapper } from "./base/basewrapper";

const Test0: FC = () => {
    return <h1>Home</h1>
}

const Test2: FC = () => {
    return <h1>Your Listing</h1>
}

const Test3: FC = () => {
    return <h1>Account</h1>
}

export const MainWrapper: FC = () => {
    return (
        <div className="main-wrapper">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Test0 />}></Route>
                <Route path="/listings" element={<BaseWrapper />}></Route>
                <Route path="/listing" element={<Test2 />}></Route>
                <Route path="/account" element={<Test3 />}></Route>
            </Routes>
        </div>
    );
}