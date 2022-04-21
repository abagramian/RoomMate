import './App.scss';
import React, { useState, Link } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
// import Dashboard from './components/Dashboard/Dashboard';
// import Preferences from './components/Preferences/Preferences';
import LoginPage from "./components/LoginPage";
import ToGet from "./components/ToGet/ToGetContainer";
// import MainPage from './components/MainPage';
// import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/toget" element={<ToGet />} />
    </Routes>
    </>
  );
}

export default App;
