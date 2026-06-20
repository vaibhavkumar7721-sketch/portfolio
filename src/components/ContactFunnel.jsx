import React from 'react';
import { Mail, ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './ContactFunnel.css';

const ContactFunnel = () => {
  return (
    <AnimatedSection id="contact" className="contact-section section-container">
      <div className="glass-panel contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Ready to hire a Data Engineer?</h2>
          <p className="contact-desc">
            I am currently open to Data Engineering roles. Let's discuss how I can help your team build scalable, self-healing data ecosystems.
          </p>
          
          <div className="contact-actions" style={{ flexWrap: 'wrap' }}>
            <a href="https://calendly.com/vaibhav-kumar-7721" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Calendar size={20} />
              Schedule an Interview
            </a>
            <a href="mailto:vaibhav.kumar.7721@gmail.com" className="btn btn-outline">
              <Mail size={20} className="text-cyan" />
              Email Me
            </a>
            <a href="http://linkedin.com/in/vaik7" target="_blank" rel="noreferrer" className="btn btn-outline">
              <ExternalLink size={20} className="text-cyan" />
              LinkedIn Profile
            </a>
          </div>
        </div>
        
        <div className="contact-visual">
          <div className="pulse-ring"></div>
          <div className="pulse-ring delayed"></div>
          <div className="contact-avatar">
            <span className="avatar-initials">VK</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactFunnel;
