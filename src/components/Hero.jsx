import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-blob primary"></div>
        <div className="gradient-blob secondary"></div>
        <div className="grid-overlay"></div>
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge-container mb-6">
          <div className="badge-pill premium-badge">
            <div className="badge-dot pulse"></div>
            <span style={{color: 'var(--text-primary)', fontWeight: 700}}>Data Engineer</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          While most engineers fix tickets, <br/>
          <span className="text-glow">I built a 0-to-1 data ecosystem.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-description">
          I engineered a strictly decoupled Extract-Load-Transform (ELT) architecture managing 30M+ daily records and automated $200M+ capital assignments. I am open to Data Engineering roles where fault-tolerance and architectural isolation are mandatory.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-meta">
          <div className="hero-meta-item">
            <Server size={18} className="text-cyan" />
            <span>Distributed Orchestration</span>
          </div>
          <span className="hero-meta-dot">•</span>
          <div className="hero-meta-item">
            <Database size={18} className="text-purple" />
            <span>Columnar Data Lakes</span>
          </div>
          <span className="hero-meta-dot">•</span>
          <div className="hero-meta-item">
            <Terminal size={18} className="text-cyan" />
            <span>High-Volume Ingestion</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-actions">
          <a href="#case-studies" className="btn btn-primary premium-btn">
            View Architecture 
            <ChevronRight size={18} />
          </a>
          <a href="https://calendly.com/vaibhav-kumar-7721" target="_blank" rel="noreferrer" className="btn btn-outline">
            Schedule an Interview
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
