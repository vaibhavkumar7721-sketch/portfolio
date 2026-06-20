import React from 'react';
import { Database, Workflow, Cloud, Boxes, LineChart, ShieldCheck } from 'lucide-react';
import './TechExpertise.css';

const TechExpertise = () => {
  const groups = [
    {
      icon: <Workflow size={22} className="text-cyan" />,
      title: 'Data Engineering',
      skills: ['Python', 'Apache Airflow', 'ELT / ETL', 'PyArrow / Parquet', 'Dynamic DAG design', 'OAuth2 ingestion']
    },
    {
      icon: <Boxes size={22} className="text-purple" />,
      title: 'Analytics Engineering',
      skills: ['dbt-core', 'Dimensional modeling', 'Staging / Mart layers', 'Data quality tests', 'SQL optimization']
    },
    {
      icon: <Database size={22} className="text-cyan" />,
      title: 'Data Warehousing',
      skills: ['PostgreSQL (AWS RDS)', 'Schema-drift insulation', 'Snapshots / history', 'Reconciliation', 'Performance tuning']
    },
    {
      icon: <Cloud size={22} className="text-purple" />,
      title: 'Cloud & Platform',
      skills: ['AWS S3', 'Azure Blob', 'FastAPI', 'RBAC & audit', 'Microservices', 'Distributed locking']
    },
    {
      icon: <LineChart size={22} className="text-cyan" />,
      title: 'Analytics & ML Enablement',
      skills: ['Feature pipelines', 'Model-ready datasets', 'Predictive enablement', 'BI / visualization', 'Geospatial analytics']
    },
    {
      icon: <ShieldCheck size={22} className="text-purple" />,
      title: 'Reliability & Compliance',
      skills: ['Data quality gates', 'Self-healing pipelines', 'MS Teams alerting', 'Regulatory reporting (TUDF)', 'Business Rule Engines']
    }
  ];

  return (
    <section id="skills" className="tech-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          The stack I use to design, build, and operate production data platforms.
        </p>
      </div>

      <div className="tech-grid">
        {groups.map((g, i) => (
          <div key={i} className="glass-panel tech-card">
            <div className="tech-card-head">
              <div className="tech-icon">{g.icon}</div>
              <h3>{g.title}</h3>
            </div>
            <div className="tech-skills">
              {g.skills.map((s) => (
                <span key={s} className="tech-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechExpertise;
