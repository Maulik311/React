import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./utils/Navbar.jsx";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}


export default App;