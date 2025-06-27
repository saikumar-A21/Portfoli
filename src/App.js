import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import NotFound from './pages/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <Navbar />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;