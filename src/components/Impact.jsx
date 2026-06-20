import React from 'react';
import { Target, TrendingUp, Shield, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './Impact.css';

const Impact = () => {
  const metrics = [
    {
      value: "Zero",
      label: "Regulatory Penalty Risk",
      icon: <Shield size={20} className="text-cyan" />
    },
    {
      value: "30-50M",
      label: "Rows Daily Throughput",
      icon: <TrendingUp size={20} className="text-purple" />
    },
    {
      value: "250+",
      label: "Operational Tables",
      icon: <Target size={20} className="text-cyan" />
    },
    {
      value: "100%",
      label: "Access Decoupling",
      icon: <Zap size={20} className="text-purple" />
    }
  ];

  return (
    <AnimatedSection id="impact" className="impact-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Business Impact Metrics</h2>
        <p className="section-subtitle">
          Transforming defensive engineering directly into organizational agility and compliance security.
        </p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="glass-panel metric-card">
            <div className="metric-header">
              {metric.icon}
            </div>
            <h3 className="metric-value text-gradient">{metric.value}</h3>
            <p className="metric-label text-secondary">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel conclusion-card">
        <h3>To pair with the deep dives:</h3>
        <ul className="text-secondary impact-list">
          <li><strong>Zero Regulatory Penalty Risk:</strong> Fully automated the formatting and SFTP delivery of highly complex CIBIL TUDF (fixed-width) compliance files.</li>
          <li><strong>30-50M Rows Daily Throughput:</strong> Orchestrated the extraction, transformation, and distribution of 250+ operational tables with 99.9% uptime.</li>
          <li><strong>Total Access Decoupling:</strong> Built a custom FastAPI Export Microservice with RBAC (Role-Based Access Control) to serve 100+ reports to 20+ co-lending partners via SMTP and Azure Blob Storage.</li>
        </ul>
      </div>
    </AnimatedSection>
  );
};

export default Impact;
