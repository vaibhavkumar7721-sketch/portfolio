import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import './ExecutiveSummary.css';

const ExecutiveSummary = () => {
  const bullets = [
    "Architected and deployed an end-to-end Extract-Load-Transform (ELT) platform orchestrating the ingestion of 150M+ transactional rows via Python and Apache Airflow, eliminating 8+ hours of daily manual reporting efforts for the Data Analytics team.",
    "Engineered a highly resilient S3 Data Lake to PostgreSQL Data Warehouse pipeline, streaming JSON API responses directly into Snappy-compressed PyArrow/Parquet files, optimizing storage costs and decoupling analytical workloads from the core banking SaaS.",
    "Designed configuration-driven Apache Airflow DAGs to dynamically generate and scale pipelines via JSON metadata, accelerating new data source onboarding to zero-code deployments while maintaining 99.9% uptime using a custom OAuth2 token-locking mechanism.",
    "Implemented a strict 3-tier dbt-core data modeling strategy (Staging, Intermediate, Marts) backed by automated data quality tests, isolating downstream reporting from upstream schema drift and guaranteeing strict financial reconciliation accuracy.",
    "Developed a secure, RBAC-enabled FastAPI microservice to automate complex regulatory compliance reporting, utilizing custom, memory-efficient Python generators to yield zero regulatory penalty risk on mandatory Credit Bureau (TUDF) submissions."
  ];

  return (
    <section id="executive-summary" className="executive-summary-section section-container">
      <div className="section-header text-center">
        <div className="badge mx-auto mb-4">
          <Briefcase size={16} className="text-cyan" />
          <span>Organizational Impact</span>
        </div>
        <h2 className="section-title">A Business Multiplier</h2>
        <p className="section-subtitle">
          Data engineering is not just moving bytes; it is creating strategic business agility. Here is how this foundation transformed the organization.
        </p>
      </div>

      <div className="glass-panel summary-card">
        <ul className="bullet-list">
          {bullets.map((bullet, index) => (
            <li key={index} className="bullet-item">
              <div className="bullet-icon">
                <CheckCircle2 size={24} className="text-cyan" />
              </div>
              <p className="bullet-text">
                {bullet.split(' ').map((word, i) => {
                  if (['Architected', 'deployed', 'Engineered', 'Designed', 'Implemented', 'Developed'].includes(word.replace(/[^a-zA-Z]/g, ''))) {
                    return <strong key={i} className="text-primary">{word} </strong>;
                  }
                  return word + ' ';
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
