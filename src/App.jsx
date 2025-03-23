// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tema1 from './pages/Tema1';
import Tema2 from './pages/Tema2';
import CiberEtica from './components/CiberEtica'; // Ajusta según la ubicación

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tema1" element={<Tema1 />} />
          <Route path="/tema2" element={<Tema2 />} />
          <Route path="/ciberetica" element={<CiberEtica />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
