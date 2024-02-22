import Navigation from './components/Navigation';
import Home from "./components/Home";
import NoPage from "./components/NoPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './components/Chapters';
import IntroPage from './components/IntroPage';
import VarPage from './components/VarPage';
import LogicPage from './components/LogicPage'
import MethodsPage from './components/MethodsPage';
import TestPageOne from './components/TestPageOne';
import ScopePage from './components/ScopePage';
import ConditionalsPage from './components/ConditionalsPage';
import React, { useState, useRef } from "react"


function App() {
  
  return (
    <div className="">
      <Navigation />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapters" element={<Chapters />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/chapter1-intro" element={<IntroPage />} />
      <Route path="/chapter1-variables" element={<VarPage />} />
      <Route path="/chapter1-methods" element={<MethodsPage />} />
      <Route path="/chapter1-test" element={<TestPageOne />} />
      <Route path="/chapter2-conditionals" element={<ConditionalsPage />} />
      <Route path="/chapter2-logic" element={<LogicPage />} />
      <Route path="/chapter2-scope" element={<ScopePage />} />
    </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
