import React, { useState } from 'react';
import { Lock, FileText, Server, Settings, ChevronRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './EngineeringHighlights.css';

const EngineeringHighlights = () => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const highlights = [
    {
      icon: <Lock size={28} />,
      title: "Distributed Concurrency Locks",
      subtitle: "OAuth2 Race Conditions",
      proof: "Proves you understand distributed state and race conditions.",
      problem: "Finflux OAuth2 tokens expire hourly. When 20+ parallel Airflow worker tasks hit the expiration window simultaneously, they triggered a concurrent token refresh race condition. This invalidated active sessions across the cluster, resulting in cascading 401 Unauthorized pipeline crashes.",
      solution: "I engineered a centralized FinfluxAuthManager utilizing a thread-safe distributed lock pattern via Airflow state variables (simulating an atomic database UPSERT). When a token expires, the first worker acquires the global lock and executes the network request. All other parallel workers pause, enter an exponential backoff loop, and await the lock release. Once the primary worker commits the new token to the state store and frees the lock, the waiting workers retrieve the fresh token from memory and resume extraction. This entirely eliminated 401 cascade failures.",
      color: "cyan"
    },
    {
      icon: <FileText size={28} />,
      title: "Schema Drift Insulation",
      subtitle: "TEXT-Type Raw Staging",
      proof: "Proves you build pipelines that survive upstream vendor changes.",
      problem: "Third-party APIs frequently introduce silent schema mutations—adding columns, changing data types, or returning unexpected nulls—which instantly crash strongly-typed ingestion pipelines.",
      solution: "I designed the ingestion layer to be fiercely schema-agnostic. All 250+ operational tables are ingested into the raw PostgreSQL schema exclusively as generic TEXT blocks. Schema enforcement is pushed entirely to the dbt transformation layer. Using custom Jinja macros (e.g., safe_cast_numeric, safe_cast_date), the staging models dynamically handle regex-based type conversions. If an upstream API sends a stringified dictionary instead of an integer, the macro casts it to NULL rather than crashing the pipeline, allowing reports to generate while logging a Data Quality warning.",
      color: "purple"
    },
    {
      icon: <Server size={28} />,
      title: "Asynchronous Memory-Mapped Streaming",
      subtitle: "High-Volume Memory Management",
      proof: "Proves you know how to manage RAM and compute efficiently.",
      problem: "Extracting tables with 2M+ rows (like repayment schedules) via REST APIs caused Out-Of-Memory (OOM) crashes on standard Airflow worker nodes when loaded into memory structures like Pandas.",
      solution: "To maintain a worker RAM footprint under 200MB regardless of dataset size, I implemented a custom FileDumper using Python Generator functions and smart date-chunking algorithms. The extractor reads the API HTTP stream in batches, yields the raw JSON directly into in-memory PyArrow tables, and serializes them out to disk as Snappy-compressed Apache Parquet files before uploading to S3. This columnar chunking approach bypasses OOM limits and reduces downstream warehouse COPY latency by over 70%.",
      color: "cyan"
    },
    {
      icon: <Settings size={28} />,
      title: "Dynamic DAG Factory",
      subtitle: "Configuration-Driven Automation",
      proof: "Proves you build platforms that scale without writing new boilerplate code.",
      problem: "Manually writing, testing, and maintaining separate Airflow DAG files for 250+ extraction tables creates an unsustainable technical debt and maintenance bottleneck.",
      solution: "I abstracted pipeline orchestration into a DAGFactory module. The system dynamically generates Airflow DAGs at runtime by parsing a centralized tables.json configuration file. To onboard a new data source, an engineer simply adds a JSON object defining the endpoint, primary key, frequency, and load strategy. The Factory automatically wires up the extraction handlers, distributed auth locks, S3 dumpers, and Microsoft Teams failure callbacks with zero manual Python code required.",
      color: "purple"
    }
  ];

  return (
    <AnimatedSection id="highlights" className="highlights-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Engineering Deep Dives</h2>
        <p className="section-subtitle">
          Architectural deep dives into the hardest problems solved.
        </p>
      </div>

      <div className="highlights-container">
        <div className="highlights-nav">
          {highlights.map((item, index) => (
            <button
              key={index}
              className={`highlight-tab ${activeHighlight === index ? 'active' : ''}`}
              onClick={() => setActiveHighlight(index)}
            >
              <div className={`tab-icon text-${item.color}`}>
                {item.icon}
              </div>
              <div className="tab-info">
                <h4>{item.title}</h4>
                <p className="text-secondary">{item.subtitle}</p>
              </div>
              <ChevronRight size={20} className="tab-arrow text-secondary" />
            </button>
          ))}
        </div>

        <div className="highlight-content-wrapper">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`glass-panel highlight-content ${activeHighlight === index ? 'active' : ''}`}
            >
              <div className={`content-icon glow-${item.color}`}>
                {React.cloneElement(item.icon, { size: 48, className: `text-${item.color}` })}
              </div>
              <h3 className="content-title">{item.title}</h3>
              <div className="content-badge text-secondary mb-4">{item.proof}</div>
              
              <div className="problem-solution-grid">
                <div className="narrative-box problem-box">
                  <div className="box-header">
                    <AlertTriangle size={18} className="text-purple" />
                    <h4>The Problem</h4>
                  </div>
                  <p className="text-secondary mt-2" style={{lineHeight: '1.7'}}>{item.problem}</p>
                </div>

                <div className="narrative-box solution-box">
                  <div className="box-header">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <h4>The Engineering Solution</h4>
                  </div>
                  <p className="text-secondary mt-2" style={{lineHeight: '1.7'}}>{item.solution}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EngineeringHighlights;
