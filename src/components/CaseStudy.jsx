import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Code, ChevronDown, ChevronUp } from 'lucide-react';
import mermaid from 'mermaid';
import AnimatedSection from './AnimatedSection';
import './CaseStudy.css';

const CaseStudy = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mermaidRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      fontFamily: 'Inter, sans-serif'
    });
    if (mermaidRef.current) {
      mermaid.contentLoaded();
    }
  }, [isExpanded]);

  return (
    <AnimatedSection id="case-study" className="case-study-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Decoupled ELT Architecture for High-Volatility Ingestion</h2>
        <p className="section-subtitle">
          Where you prove you understand trade-offs, not just tools.
        </p>
      </div>

      <div className={`glass-panel case-study-container ${isExpanded ? 'expanded' : ''}`}>
        <div className="case-study-header">
          <div className="case-study-title-row">
            <BookOpen size={24} className="text-purple" />
            <h3>Lighthouse: Enterprise Data Analytics Platform</h3>
          </div>
          <div className="case-study-tags">
            <span className="tech-tag">Architecture: ELT</span>
            <span className="tech-tag">High Volatility</span>
            <span className="tech-tag">Predictable Compute</span>
          </div>
        </div>

        <div className="case-study-body">
          <h4>System Architecture</h4>
          
          <div className="mermaid-wrapper">
            <div className="mermaid" ref={mermaidRef}>
              {`flowchart LR
    subgraph SaaS["Core Banking SaaS"]
        API[("JSON API<br/>(Finflux)")]
    end

    subgraph Extractor["Extraction Layer"]
        Airflow["Apache Airflow<br/>(Dynamic DAGs)"]
        Python["Python Extractor<br/>(PyArrow Chunking)"]
        Airflow -->|"Orchestrates"| Python
        Python -->|"OAuth2 Streams"| API
    end

    subgraph DataLake["Data Lake"]
        S3[("AWS S3<br/>(Snappy Parquet)")]
    end

    subgraph Warehouse["Data Warehouse"]
        RDS[("PostgreSQL<br/>(AWS RDS)")]
        dbt["dbt-core<br/>(Transformations)"]
    end

    subgraph Delivery["Delivery Layer"]
        FastAPI["FastAPI Portal<br/>(RBAC)"]
        Teams["MS Teams<br/>Alerts"]
    end

    Python -->|"Writes"| S3
    S3 -->|"COPY bulk load"| RDS
    RDS -->|"In-Database"| dbt
    dbt -->|"Marts"| FastAPI
    Airflow -.->|"Webhooks"| Teams`}
            </div>
          </div>

          <hr className="divider" />

          <h4>Architectural Philosophy</h4>
          <div className="impact-text">
            <p>
              "When you are relying on highly volatile, rate-limited vendor APIs as your primary data source, traditional ETL is an immediate anti-pattern. A single timeout or upstream schema change would break the entire pipeline, forcing expensive re-extractions."
            </p>
            <p>
              "To solve this, I engineered a strictly decoupled Extract-Load-Transform (ELT) architecture. S3 acts as our immutable, fault-tolerant message broker and raw Parquet data lake. By physically separating extraction from database loading, we guarantee that downstream warehouse failures or transformation bugs never trigger a re-extraction from the fragile APIs. Furthermore, we intentionally chose a managed PostgreSQL instance over usage-based cloud warehouses to permanently lock in predictable compute costs for our fixed-batch analytical workloads. It’s an architecture built for resilience, isolation, and scale."
            </p>
          </div>
        </div>

        <div className="case-study-fade"></div>
        <button 
          className="btn-expand" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <><ChevronUp size={20} /> Show Less</>
          ) : (
            <><ChevronDown size={20} /> Read Full Director's Narrative</>
          )}
        </button>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudy;
