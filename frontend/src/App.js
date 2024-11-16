import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import API_URL from './config';

// src/App.js
import './App.css';


import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;