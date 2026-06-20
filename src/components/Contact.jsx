import React from 'react';
import { Mail, Linkedin, Github, Download, FileText, Briefcase, Rocket } from 'lucide-react';
import './Contact.css';

const EMAIL = 'vaibhav.kumar.7721@gmail.com';
// TODO: replace these placeholders with your real links
const LINKEDIN_URL = '#'; // e.g. https://linkedin.com/in/your-handle
const GITHUB_URL = '#';    // e.g. https://github.com/your-handle
const RESUME_URL = '#';    // e.g. /Vaibhav_Kumar_Resume.pdf

const Contact = () => {
  const recruiterMail = `mailto:${EMAIL}?subject=Data%20Engineering%20Role%20Opportunity&body=Hi%20Vaibhav,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20role...`;
  const consultMail = `mailto:${EMAIL}?subject=Consulting%20Inquiry&body=Hi%20Vaibhav,%0D%0A%0D%0ACompany:%0D%0AWhat%20we%20need:%0D%0ATimeline:%0D%0ABudget%20range:%0D%0A`;

  return (
    <>
      <section id="resume" className="resume-band section-container">
        <div className="glass-panel resume-card">
          <div className="resume-left">
            <FileText size={28} className="text-cyan" />
            <div>
              <h3>Résumé</h3>
              <p className="text-secondary">
                One-page summary of experience, stack, and impact — ready for ATS and quick screening.
              </p>
            </div>
          </div>
          {/* TODO: point RESUME_URL to your PDF */}
          <a href={RESUME_URL} className="btn btn-primary" download>
            <Download size={18} /> Download PDF
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section section-container">
        <div className="section-header text-center">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Hiring for a data engineering role, or need a data problem solved? Pick your path below —
            I usually reply within a day.
          </p>
        </div>

        <div className="contact-paths">
          <div className="glass-panel contact-path">
            <div className="path-icon"><Briefcase size={26} className="text-cyan" /></div>
            <h3>For Recruiters &amp; Hiring Teams</h3>
            <p className="text-secondary">
              Open to Senior / Lead Data Engineering roles. Get my résumé and a quick intro to my work.
            </p>
            <a href={recruiterMail} className="btn btn-primary path-btn">
              <Mail size={18} /> Email about a role
            </a>
          </div>

          <div className="glass-panel contact-path">
            <div className="path-icon purple"><Rocket size={26} className="text-purple" /></div>
            <h3>For Founders &amp; Businesses</h3>
            <p className="text-secondary">
              Need pipelines, a warehouse, or reporting automation? Let's scope it on a free 20-min call.
            </p>
            <a href={consultMail} className="btn btn-secondary path-btn">
              <Mail size={18} /> Start a consulting chat
            </a>
          </div>
        </div>

        <div className="contact-links">
          <a href={`mailto:${EMAIL}`} className="contact-link">
            <Mail size={18} className="text-cyan" /> {EMAIL}
          </a>
          {/* TODO: replace placeholder LinkedIn URL */}
          <a href={LINKEDIN_URL} className="contact-link" target="_blank" rel="noreferrer">
            <Linkedin size={18} className="text-cyan" /> LinkedIn
          </a>
          {/* TODO: replace placeholder GitHub URL */}
          <a href={GITHUB_URL} className="contact-link" target="_blank" rel="noreferrer">
            <Github size={18} className="text-cyan" /> GitHub
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
