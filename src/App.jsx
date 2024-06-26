import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Context } from "./context/Context";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";

function App() {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handlerWindowWith = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handlerWindowWith);

    return () => {
      window.removeEventListener("resize", handlerWindowWith)
    };

  },[]);

  const contextValue = {
    windowWith,
  }

  return (
    <Context.Provider value={contextValue}>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </Context.Provider>
  )
};

export default App;