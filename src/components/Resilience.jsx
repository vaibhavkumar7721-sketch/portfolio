import React from 'react';
import { ShieldAlert, ActivitySquare, DatabaseBackup } from 'lucide-react';
import './Resilience.css';

const Resilience = () => {
  const features = [
    {
      icon: <ShieldAlert size={32} className="text-cyan" />,
      title: "Inline Data Quality (DQ) Gates",
      desc: "Before any Parquet file is promoted from staging to the raw warehouse, the WarehouseLoader executes a row-count variance check against the upstream API metadata. If a sudden data drop exceeding 50% is detected, the load is blocked, and an Adaptive Card alert is fired to MS Teams to prevent data corruption."
    },
    {
      icon: <ActivitySquare size={32} className="text-purple" />,
      title: "Auto-Healing API Limits",
      desc: "Implemented self-optimizing CustomHandlers that detect anomalous API responses (like 1D JSON explosions) and apply on-the-fly data healing before serialization, preventing pipeline blocks."
    },
    {
      icon: <DatabaseBackup size={32} className="text-cyan" />,
      title: "Data Lake Decoupling",
      desc: "By utilizing AWS S3 as an intermediary Parquet data lake, any failure in the PostgreSQL data warehouse or dbt layer can be recovered instantly. The Airflow cluster can trigger a recovery_mode load directly from the S3 Parquet cache, completely bypassing the need to re-tax the vendor APIs."
    }
  ];

  return (
    <section id="resilience" className="resilience-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">System Resilience & Monitoring</h2>
        <p className="section-subtitle">
          Where you prove you care about what happens AFTER you deploy. Defensive engineering and automated recovery.
        </p>
      </div>

      <div className="resilience-grid">
        {features.map((feature, index) => (
          <div key={index} className="resilience-card glass-panel">
            <div className="resilience-icon">
              {feature.icon}
            </div>
            <h3 className="resilience-card-title">{feature.title}</h3>
            <p className="resilience-card-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resilience;
