import React from 'react';
import { Compass, Target, Rocket } from 'lucide-react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">The Horizon</h2>
        <p className="section-subtitle">
          Elite engineering doesn't just solve today's problems; it maps out the future. Here is the strategic roadmap for the Lighthouse platform.
        </p>
      </div>

      <div className="roadmap-container">
        
        <div className="glass-panel roadmap-card short-term">
          <div className="roadmap-header">
            <div className="icon-container glow-cyan">
              <Target size={32} className="text-cyan" />
            </div>
            <div className="roadmap-title">
              <h3>Short-Term Goals</h3>
              <span className="badge-pill">0-6 Months</span>
            </div>
          </div>
          <div className="roadmap-body">
            <ul>
              <li>
                <strong>Data Contracts:</strong> Implementing strict schema contracts between upstream software engineering teams and the data platform to prevent breaking changes.
              </li>
              <li>
                <strong>Self-Service BI Expansion:</strong> Extending the FastAPI portal to allow business users to build dynamic visualizations using embedded Metabase/Superset.
              </li>
              <li>
                <strong>Real-Time Observability:</strong> Integrating Datadog/Prometheus for granular, query-level performance tracing across the PostgreSQL warehouse.
              </li>
            </ul>
          </div>
        </div>

        <div className="roadmap-connector">
          <div className="connector-line"></div>
          <Compass size={24} className="text-purple compass-icon" />
          <div className="connector-line"></div>
        </div>

        <div className="glass-panel roadmap-card long-term">
          <div className="roadmap-header">
            <div className="icon-container glow-purple">
              <Rocket size={32} className="text-purple" />
            </div>
            <div className="roadmap-title">
              <h3>Long-Term Vision</h3>
              <span className="badge-pill">12-18 Months</span>
            </div>
          </div>
          <div className="roadmap-body">
            <ul>
              <li>
                <strong>Real-Time Event Streaming:</strong> Transitioning from batch ELT to a fully event-driven architecture using Apache Kafka to capture core banking events instantaneously.
              </li>
              <li>
                <strong>Embedded Predictive Analytics:</strong> Integrating ML models directly into the dbt transformation layer to proactively predict non-performing assets (NPAs) before they default.
              </li>
              <li>
                <strong>Autonomous Self-Healing Ecosystem:</strong> Building AI-driven agents that can automatically resolve data quality anomalies and rewrite broken staging pipelines without human intervention.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;
