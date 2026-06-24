import React, { useState } from 'react';
import { Database, Workflow, BrainCircuit, Banknote, Map, ChevronRight, CheckCircle2, AlertTriangle, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import './ProjectsGallery.css';

const ProjectsGallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "lighthouse",
      title: "Lighthouse Data Platform",
      subtitle: "Two-Phase Enterprise ELT Platform",
      icon: <Database size={24} />,
      color: "cyan",
      problem: "Lacked direct database access to the operational LMS and relied on highly volatile, rate-limited vendor APIs, making traditional ETL impossible.",
      scale: "150M+ Historical Records, 30-50M Daily Throughput, 90+ Operational Tables.",
      architecture: "Phase 1: Airflow -> PyArrow -> S3 -> PostgreSQL -> dbt -> FastAPI  |  Phase 2: Airflow -> S3 -> Databricks (PySpark) -> Snowflake -> dbt.",
      challenges: "Phase 1: 401 token races, OOM on large streams, schema drift. Phase 2: Transformation workloads outgrew PostgreSQL — migrated to Databricks + Snowflake without touching the extraction layer.",
      solution: "Phase 1 — strict ELT: DAG Factory, PyArrow chunked extraction to S3 Parquet, raw TEXT load into PostgreSQL, dbt staging→mart, FastAPI portal for 100+ reports and CIBIL TUDF automation. Phase 2 — kept the proven Airflow + S3 extraction unchanged, migrated transformation to Databricks (PySpark) for distributed compute, and loaded curated outputs into Snowflake as the analytical warehouse with dbt-on-Snowflake for the mart layer.",
      impact: "Zero Regulatory Penalty Risk, 8 hrs/day manual reporting eliminated, 150M+ records governed. Phase 2 unlocked distributed transformation and a cloud-native warehouse — zero changes to the extraction layer."
    },
    {
      id: "bureau",
      title: "Bureau Automation Platform",
      subtitle: "Credit Workflow Orchestration",
      icon: <Workflow size={24} />,
      color: "purple",
      problem: "Credit teams manually processed bureau data for 500,000+ clients (150-200 accounts each). Renewal approval cycles took 1–1.5 weeks every month.",
      scale: "500K+ Clients, 80M+ complex bureau trendline records (CIBIL, Equifax).",
      architecture: "Microservices -> AWS S3 -> Apache Airflow -> Warehouse -> Business Rule Engine.",
      challenges: "Massive computational overhead required to process intricate DPD histories and generate reliable credit scores securely.",
      solution: "Built an automated monthly workflow orchestrated by Airflow. Implemented a robust Business Rule Engine and data quality layers inside the warehouse to generate analytical outputs.",
      impact: "Achieved 99.99% accuracy. Slashed manual credit processing time from 1.5 weeks to under 45 mins."
    },
    {
      id: "predictive",
      title: "Predictive Analytics Platform",
      subtitle: "ML Ops & Feature Engineering",
      icon: <BrainCircuit size={24} />,
      color: "cyan",
      problem: "Loan approval prediction and collection default prediction workflows required heavy manual data preparation across APIs, DBs, and bureau files.",
      scale: "236-feature matrix computed for 500K+ clients.",
      architecture: "Centralized Ingestion Framework -> Unified Data Warehouse -> Automated ML Feature Pipelines -> Prod Systems.",
      challenges: "Standardizing volatile data from disparate, unstructured sources into clean, model-ready datasets.",
      solution: "Built a centralized ingestion and transformation framework. Created automated, repeatable feature engineering pipelines that trigger downstream ML workflows and publish directly to production.",
      impact: "Eliminated 10 hours of manual wrangling with a 2-hour Airflow workflow that directly triggers ML scoring."
    },
    {
      id: "funding",
      title: "Auto Fund Tagging Platform",
      subtitle: "Complex Business Logic Automation",
      icon: <Banknote size={24} />,
      color: "purple",
      problem: "Fund allocation depended on constantly changing finance rules, lending partner constraints, DPD limits, and off-book exclusions. Manual execution could not scale.",
      scale: "$200M+ portfolio across 86 institutional partners, evaluating 500K+ active loans.",
      architecture: "LMS Data -> Warehouse Routing Engine -> LMS API Integration.",
      challenges: "Translating ambiguous, overlapping financial constraints and partner requirements into deterministic code.",
      solution: "Created a warehouse-driven allocation workflow that automatically calculates customer eligibility and fund availability, then integrates the outputs back into the LMS systems.",
      impact: "Executed Reverse ETL to push validated tags back to LMS, slashing a 4-day manual process to under 30 mins."
    },
    {
      id: "geo",
      title: "Enterprise Geo Analytics",
      subtitle: "Location Intelligence Pipeline",
      icon: <Map size={24} />,
      color: "cyan",
      problem: "Only 34% of organizational centers had verified geo-location information, crippling field operations and location-based decision making.",
      scale: "Organization-wide footprint covering all branches and field centers.",
      architecture: "External APIs + Internal Files -> Ingestion Pipeline -> Centralized Warehouse -> BI Layer.",
      challenges: "Merging messy, unstandardized user-entered location data with external geospatial APIs.",
      solution: "Collected and standardized location data from multiple APIs and internal systems. Built transformation pipelines to create centralized warehouse datasets and powered the BI visualization layer.",
      impact: "Verified geo-location coverage skyrocketed from 34% to 97% within 6 months, unlocking powerful field intelligence."
    },
    {
      id: "retail",
      title: "Enterprise Retail ELT Engine",
      subtitle: "PySpark & Big Data Processing",
      icon: <ShoppingCart size={24} />,
      color: "purple",
      problem: "Expensive, slow, and unoptimized data processing for high-volume retail transactions led to bloated storage costs and delayed analytics.",
      scale: "Massive volume retail transactions processed via distributed computing.",
      architecture: "PySpark -> Broadcast Joins -> AWS S3 -> Parquet.",
      challenges: "Frequent network shuffles during joins causing extreme latency and inflated AWS S3 storage costs.",
      solution: "Built a distributed ELT pipeline utilizing PySpark. Implemented Broadcast Joins to eliminate expensive network shuffles, and transitioned the storage layer to columnar Parquet.",
      impact: "Achieved a massive 65% reduction in AWS S3 storage costs while significantly speeding up transaction cleaning."
    }
  ];

  const active = projects[activeProject];

  return (
    <AnimatedSection id="case-studies" className="projects-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          End-to-end platforms built to solve complex business constraints at scale.
        </p>
      </div>

      <div className="projects-layout">
        <div className="projects-sidebar">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-tab ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <div className={`project-tab-icon text-${project.color}`}>
                {project.icon}
              </div>
              <div className="project-tab-info">
                <h4>{project.title}</h4>
                <p>{project.subtitle}</p>
              </div>
              <ChevronRight size={18} className="project-tab-arrow" />
            </button>
          ))}
        </div>

        <div className="project-detail-container glass-panel" style={{position: 'relative', overflow: 'hidden'}}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%', height: '100%' }}
            >
              <div className="project-detail-header">
                <div className={`project-detail-icon glow-${active.color} text-${active.color}`}>
                  {active.icon}
                </div>
                <div>
                  <h3 className="project-detail-title">{active.title}</h3>
                  <p className="project-detail-subtitle">{active.subtitle}</p>
                </div>
              </div>

              <div className="project-metrics-row">
                <div className="metric-badge">
                  <strong>Scale:</strong> {active.scale}
                </div>
                <div className="metric-badge">
                  <strong>Tech:</strong> {active.architecture.split('->').join(' ➔ ')}
                </div>
              </div>

              <div className="project-content-grid">
                <div className="project-box problem-box">
                  <div className="box-header">
                    <AlertTriangle size={18} className="text-purple" />
                    <h4>The Problem & Challenge</h4>
                  </div>
                  <p><strong>Context:</strong> {active.problem}</p>
                  <p className="mt-2"><strong>Challenge:</strong> {active.challenges}</p>
                </div>

                <div className="project-box solution-box">
                  <div className="box-header">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <h4>Solution & Impact</h4>
                  </div>
                  <p><strong>Architecture:</strong> {active.solution}</p>
                  <p className="mt-2 text-gradient font-bold"><strong>Outcome:</strong> {active.impact}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsGallery;
