import React from 'react';
import { DatabaseZap, LineChart, Code2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <DatabaseZap size={36} className="text-cyan" />,
      title: "Data Warehousing & ELT",
      desc: "Architecting decoupled, scalable data lakes and warehouses. I specialize in moving chaotic data from fragile APIs into pristine, analytics-ready PostgreSQL and Snowflake environments with zero data loss."
    },
    {
      icon: <Code2 size={36} className="text-purple" />,
      title: "Business Logic Automation",
      desc: "Translating hyper-complex financial rules, fund allocations, and credit workflows into deterministic, automated code. Eliminating manual operational bottlenecks to save 100+ hours monthly."
    },
    {
      icon: <LineChart size={36} className="text-cyan" />,
      title: "BI & Predictive Analytics",
      desc: "Powering real-time dashboards and ML pipelines. I build the central nervous system that feeds clean, model-ready datasets directly to your business intelligence and data science teams."
    }
  ];

  return (
    <section id="services" className="services-section section-container">
      <div className="section-header text-center">
        <div className="badge-pill mx-auto mb-4">
          <span className="badge-dot"></span>
          <span>Consulting & Freelance</span>
        </div>
        <h2 className="section-title">How I Can Help Your Business</h2>
        <p className="section-subtitle">
          From startups to mid-sized enterprises, I turn operational data into a competitive advantage.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card glass-panel">
            <div className="service-icon glow-cyan">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
