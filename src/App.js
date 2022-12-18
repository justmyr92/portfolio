import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Education />
        </div>
    );
}

export default App;
