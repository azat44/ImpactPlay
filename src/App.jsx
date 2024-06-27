import React from 'react';
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Classement from "./pages/Classement";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recompenses from "./pages/Recompenses";
import Register from "./pages/Register";
import BottomMenu from './components/BottomMenu/BottomMenu';  
import Ranks from './pages/Ranks'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/recompenses" element={<Recompenses />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/" element={<Home />} />
        <Route path="/Ranks" element={<Ranks />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <BottomMenu />  
    </Router>
  );
};

export default App;
