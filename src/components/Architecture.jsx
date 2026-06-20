import React from 'react';
import { Cloud, Database, Cpu, Send, ArrowRight } from 'lucide-react';
import './Architecture.css';

const Architecture = () => {
  const steps = [
    {
      id: "01",
      icon: <Cloud size={32} className="text-cyan" />,
      title: "Extraction & Data Lake",
      desc: "Robust OAuth2 generic extractors stream 150M+ rows of JSON API responses directly into AWS S3 as compressed Parquet files. This ELT approach ensures a durable raw data backup.",
      color: "cyan"
    },
    {
      id: "02",
      icon: <Database size={32} className="text-purple" />,
      title: "Cloud Data Warehouse",
      desc: "Raw data is loaded into a managed PostgreSQL Warehouse. Relying on a robust RDBMS provides ACID compliance and optimal performance for massive analytical queries.",
      color: "purple"
    },
    {
      id: "03",
      icon: <Cpu size={32} className="text-cyan" />,
      title: "dbt Transformations",
      desc: "Using dbt-core, data is transformed in-database across Staging, Intermediate, and Mart layers. Enforces data quality tests and builds denormalized fact tables for reporting.",
      color: "cyan"
    },
    {
      id: "04",
      icon: <Send size={32} className="text-purple" />,
      title: "Delivery & UI",
      desc: "A FastAPI microservice powers an internal Export UI, offering Role-Based Access to 100+ reports. Automated pipelines distribute bureau TUDF files and notify via MS Teams.",
      color: "purple"
    }
  ];

  return (
    <section id="architecture" className="architecture-section section-container">
      <div className="section-header">
        <h2 className="section-title">The Foundation Created</h2>
        <p className="section-subtitle text-left">
          We didn't just build a pipeline; we built a foundation. By decoupling analytics from operations, Lighthouse created an ecosystem that guarantees disaster recovery, strict compliance, and rapid intelligence.
        </p>
      </div>

      <div className="arch-timeline">
        {steps.map((step, index) => (
          <div key={index} className="arch-step">
            <div className="step-connector">
              <div className={`step-node glow-${step.color}`}>
                {step.icon}
              </div>
              {index !== steps.length - 1 && (
                <div className="step-line">
                  <div className="animated-flow"></div>
                </div>
              )}
            </div>
            <div className="glass-panel step-content">
              <span className={`step-number text-${step.color}`}>{step.id}</span>
              <h3 className="card-title">{step.title}</h3>
              <p className="text-secondary">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Architecture;
