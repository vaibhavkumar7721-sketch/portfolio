import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const roles = [
    {
      role: 'Data Engineer',
      company: 'Light Finance',
      period: '2024 — Present',
      location: 'Bengaluru / Delhi NCR, India',
      summary:
        'Own the data platform ("Lighthouse") for the Non-MFI business unit of a regulated NBFC — the central infrastructure powering compliance, partner reporting, and analytics.',
      points: [
        'Architected an end-to-end ELT platform on Airflow + dbt + PostgreSQL + AWS S3 ingesting 90+ tables and 150M+ records from volatile vendor APIs.',
        'Built a config-driven dynamic DAG factory enabling zero-code onboarding of new data sources.',
        'Automated monthly credit-bureau processing for 500K+ clients at 99.99% accuracy with a configurable Business Rule Engine.',
        'Delivered CIBIL TUDF regulatory submissions with zero penalty risk and replaced 8+ hours/day of manual reporting.',
        'Shipped a FastAPI self-service portal with RBAC serving 100+ reports, plus geo-analytics, predictive-feature, and fund-tagging pipelines.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Hands-on platform ownership in regulated fintech.
        </p>
      </div>

      <div className="exp-timeline">
        {roles.map((r, i) => (
          <div key={i} className="glass-panel exp-card">
            <div className="exp-head">
              <div className="exp-icon"><Briefcase size={22} className="text-cyan" /></div>
              <div className="exp-head-text">
                <h3>{r.role} <span className="exp-company">· {r.company}</span></h3>
                <div className="exp-meta">{r.period} &nbsp;•&nbsp; {r.location}</div>
              </div>
            </div>
            <p className="exp-summary">{r.summary}</p>
            <ul className="exp-points">
              {r.points.map((p, j) => (
                <li key={j}>
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
