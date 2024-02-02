import Navigation from './components/Navigation';
import './App.css';
import Home from "./components/Home";
import NoPage from "./components/NoPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './components/Chapters';
import IntroPage from './components/IntroPage';
import VarPage from './components/VarPage';
import LogicPage from './components/LogicPage'
import MethodsPage from './components/MethodsPage';
import React, { useState, useRef } from "react"


function App() {
  
  return (
    <div className="App">
      <Navigation />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapters" element={<Chapters />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/chapter1-intro" element={<IntroPage />} />
      <Route path="/chapter1-variables" element={<VarPage />} />
      <Route path="/chapter1-methods" element={<MethodsPage />} />
    </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
