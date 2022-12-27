import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Support from "./pages/Support";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
