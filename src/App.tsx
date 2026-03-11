import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutWrapper } from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
