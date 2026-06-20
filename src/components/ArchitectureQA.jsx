import React, { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import './ArchitectureQA.css';

const ArchitectureQA = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      q: 'Tell me about a time you solved a highly complex data reliability or compliance problem.',
      context: 'Focus: Bureau TUDF pipeline and automated reconciliation.',
      s: 'In the highly regulated Indian microfinance sector, we were required to submit complex, mandatory credit bureau reports (specifically the fixed-width TUDF format). Doing this manually was an active operational hazard. A single formatting error or reconciliation mismatch could lead to severe regulatory penalties and strained lending partner relations.',
      t: 'My objective was to design a fully automated, risk-free pipeline that could extract financial data, validate it with 100% accuracy against the core banking system, and serialize it into these highly specific legacy formats without human intervention.',
      a: 'I approached this by building a custom Python formatting engine isolated from our standard dbt transformation layer. First, I implemented automated reconciliation loops in our PostgreSQL Data Warehouse to cross-verify row counts and checksums against the SaaS APIs. Once validated, I built a memory-efficient Python generator that streamed the validated data, mapped it to the 72-column TUDF specification, applied multi-stage data quality rules, and securely dispatched the finalized files to AWS S3.',
      r: 'This architecture yielded a 99.9% data accuracy rate and completely eliminated the 8+ hours analysts previously spent on manual Excel formatting. Most importantly, we achieved zero regulatory penalty risk on all mandatory bureau submissions moving forward.'
    },
    {
      q: 'How do you design pipelines to be scalable and maintainable as the number of tables scales?',
      context: 'Focus: Configuration-Driven Dynamic Airflow DAG orchestration.',
      s: 'When we initially built our ELT pipeline, we were ingesting a small handful of tables. However, as the platform rapidly scaled to require over 90 distinct operational tables from our core SaaS provider, hardcoding and maintaining individual Apache Airflow DAGs became a massive code duplication issue and an ongoing maintenance nightmare.',
      t: 'I needed to architect a pipeline orchestration layer that could dynamically scale to hundreds of endpoints without requiring continuous deployment or code changes from the engineering team.',
      a: 'I engineered a configuration-driven orchestration system in Airflow. I abstracted the extraction logic into a GenericApiExtractor Python class and created a central tables.json metadata file containing endpoint URLs, schedules, and primary keys. I then implemented a Factory Pattern inside our Airflow lighthouse_orchestrator.py that dynamically parses this JSON file at runtime and automatically generates the corresponding DAG objects.',
      r: 'This decoupled the data engineering logic from pipeline execution. It enabled "zero-code" data source integration—meaning analysts or engineers could now onboard a new API endpoint simply by adding three lines to a JSON file. This drastically accelerated our velocity and completely removed orchestration bottlenecks.'
    },
    {
      q: 'How do you optimize data pipelines to handle large transactional volumes while preventing resource exhaustion (OOM)?',
      context: 'Focus: S3 Parquet streaming and memory chunking.',
      s: 'Our core loan management API returned massive JSON payloads. As our dataset quickly grew to over 150 million transactional rows, trying to load these responses directly into memory or stream them straight into the PostgreSQL data warehouse caused severe memory spikes (OOM errors), API timeouts, and exhausted database connection pools.',
      t: 'I was tasked with designing a highly optimized, memory-safe ingestion pipeline that could handle theoretically unlimited data volumes while acting as a cheap, immutable backup.',
      a: 'Instead of a direct API-to-Database ETL approach, I pivoted to a decoupled ELT architecture utilizing AWS S3 as a staging Data Lake. I modified our Python extractors to use HTTP chunking, processing the JSON stream in fixed-size batches. As each batch was processed, it was immediately serialized using PyArrow and written to S3 as a Snappy-compressed Parquet file. Only after the files were safely durably stored in S3 did we trigger a bulk COPY command to stream the Parquet data into PostgreSQL.',
      r: 'By decoupling extraction from loading and utilizing column-oriented Parquet compression, we achieved a constant memory footprint during extraction regardless of the dataset size. It solved our OOM issues entirely, optimized network bandwidth, and provided a durable, cheap raw data backup in S3 that could be replayed at any time without hitting the primary SaaS APIs.'
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="qa" className="qa-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Architecture Q&A</h2>
        <p className="section-subtitle">
          Deep-diving into the core design challenges and engineering solutions using the STAR framework.
        </p>
      </div>

      <div className="qa-container">
        {questions.map((item, index) => (
          <div key={index} className={`qa-item glass-panel ${openIndex === index ? 'open' : ''}`}>
            <button className="qa-header" onClick={() => toggleQuestion(index)}>
              <div className="qa-title-row">
                <MessageSquare size={20} className="text-cyan" />
                <h4 className="qa-question">{item.q}</h4>
              </div>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            <div className="qa-body">
              <div className="qa-context text-secondary mb-4">
                <em>{item.context}</em>
              </div>
              
              <div className="star-grid">
                <div className="star-item">
                  <div className="star-label">Situation</div>
                  <p>{item.s}</p>
                </div>
                <div className="star-item">
                  <div className="star-label">Task</div>
                  <p>{item.t}</p>
                </div>
                <div className="star-item">
                  <div className="star-label">Action</div>
                  <p>{item.a}</p>
                </div>
                <div className="star-item">
                  <div className="star-label text-cyan">Result</div>
                  <p>{item.r}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitectureQA;
