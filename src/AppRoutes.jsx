import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/shop" element={Shop} />
        <Route path="/about" element={About} />
      </Routes>
    </>
  );
};

export default AppRoutes;
