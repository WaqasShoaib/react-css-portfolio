import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import { useTheme, useMediaQuery } from '@mui/material';

import Header from './layouts/Header';
import SideNav from './layouts/SideNav';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [navOpen, setNavOpen] = useState(!isMobile);
  
  // Add meta viewport tag to ensure proper mobile scaling
  useEffect(() => {
    // Ensure the viewport meta tag exists and has the right content
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  }, []);

  return (
    <PageTitleProvider>
      <BrowserRouter>
        <div style={{ overflowX: 'hidden', width: '100%' }}>
          <Header onMenuClick={() => setNavOpen(!navOpen)} />
          
          <div className="app-container">
            <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
            
            <main className={`content ${!isMobile && navOpen ? 'content-shifted' : ''}`}>
              <div className="centered-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </main>
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </PageTitleProvider>
  );
}

export default App;