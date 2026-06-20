import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Architecture from './components/Architecture';
import EngineeringHighlights from './components/EngineeringHighlights';
import Impact from './components/Impact';
import CaseStudy from './components/CaseStudy';
import Resilience from './components/Resilience';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsGallery from './components/ProjectsGallery';
import ContactFunnel from './components/ContactFunnel';
import { Database, Terminal } from 'lucide-react';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Terminal size={24} className="text-cyan" />
            <span>Vaibhav Kumar</span>
          </div>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#lighthouse-core">Lighthouse Platform</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact" className="text-cyan">Hire Me</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <SkillsMatrix />
        
        <div id="lighthouse-core" className="section-container" style={{paddingBottom: '0'}}>
          <div className="section-header text-center">
            <div className="badge-pill mx-auto mb-4">
              <span className="badge-dot"></span>
              <span>Flagship Deep Dive</span>
            </div>
            <h2 className="section-title">Lighthouse Data Platform</h2>
            <p className="section-subtitle">
              An architectural deep dive into building a robust enterprise ecosystem.
            </p>
          </div>
        </div>

        <Challenge />
        <Architecture />
        <CaseStudy />
        <EngineeringHighlights />
        <Resilience />
        <Impact />

        <ProjectsGallery />
        <ContactFunnel />
      </main>
      
      <footer className="footer text-center">
        <p className="text-secondary">
          © {new Date().getFullYear()} - Designed to showcase engineering excellence 
          while preserving enterprise confidentiality.
        </p>
      </footer>
    </div>
  );
}

export default App;
