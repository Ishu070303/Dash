import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;