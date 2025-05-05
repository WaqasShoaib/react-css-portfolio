// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageTitleProvider } from './context/PageTitleContext';

import Header from './layouts/Header';
import SideNav from './layouts/SideNav';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';  

function App() {
  return (
    <PageTitleProvider>
      <BrowserRouter>
        <Header />

        <div className="app-container">
          <SideNav />

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </BrowserRouter>
    </PageTitleProvider>
  );
}

export default App;
