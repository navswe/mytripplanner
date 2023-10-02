import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import HeaderBar from "./components/Header/Header";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
