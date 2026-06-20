// Case study content backbone.
// Lighthouse Core is grounded in the actual codebase.
// The other four are based on delivered projects (not part of this repo).

export const caseStudies = [
  {
    id: 'bureau-automation',
    title: 'Bureau Automation & Credit Workflow Platform',
    tagline: 'Automating monthly credit-bureau processing for 500K+ clients at 99.99% accuracy.',
    tags: ['Airflow', 'Microservices', 'S3', 'Business Rule Engine', 'PostgreSQL', 'Compliance'],
    accent: 'cyan',
    featured: true,
    problem:
      'Credit teams manually processed credit-bureau data for more than 500,000 clients every month. Each client could carry 150–200 bureau accounts with extensive DPD history and large credit footprints. Renewal approval cycles took 1–1.5 weeks every single month, creating a recurring operational bottleneck and real risk of inconsistent credit decisions.',
    scale: [
      '500,000+ clients processed monthly',
      '150–200 bureau accounts per client',
      'Tens of millions of DPD / account-history rows',
      'Approval cycle reduced from 1–1.5 weeks to automated turnaround'
    ],
    challenges: [
      'Enormous, deeply nested bureau payloads per client that broke naive in-memory processing.',
      'Constantly evolving credit policy and business rules that could not be hardcoded.',
      'Strict accuracy requirements — a wrong credit decision has direct financial and regulatory consequences.',
      'Coordinating microservice delivery, orchestration, and warehouse loading into one reliable monthly cycle.'
    ],
    solution:
      'I built an automated monthly workflow where bureau data is delivered to S3 through microservices, Airflow orchestrates the end-to-end processing, and dedicated transformation and data-quality layers normalize and validate every record. A configurable Business Rule Engine encodes the credit policy (eligibility, DPD thresholds, account aggregation) so analysts can change logic without code changes. Validated outputs are loaded into the warehouse and automatically published as analytical outputs and reports for the credit team.',
    architecture: `flowchart LR
    subgraph Source["Bureau Data"]
        MS["Microservices<br/>(deliver to S3)"]
    end
    subgraph Lake["Data Lake"]
        S3[("AWS S3")]
    end
    subgraph Orchestration["Apache Airflow"]
        EX["Extract + Parse"]
        DQ["Data Quality<br/>Layer"]
        BRE["Business Rule<br/>Engine"]
    end
    subgraph WH["Warehouse"]
        PG[("PostgreSQL")]
    end
    subgraph Out["Outputs"]
        RPT["Automated Reports<br/>& Analytics"]
    end
    MS --> S3 --> EX --> DQ --> BRE --> PG --> RPT`,
    techStack: ['Apache Airflow', 'Microservices', 'AWS S3', 'PostgreSQL', 'Python', 'Business Rule Engine', 'dbt-style transforms'],
    impact: [
      { value: '500K+', label: 'Clients automated monthly' },
      { value: '99.99%', label: 'Processing accuracy' },
      { value: '1.5wk → auto', label: 'Approval turnaround' },
      { value: 'Scalable', label: 'Repeatable monthly run' }
    ],
    outcome:
      'A previously manual, week-long workflow became a hands-off monthly pipeline. The credit team gained faster, more consistent renewal decisions, and the business unlocked scalable processing for 500K+ customers without adding headcount.',
    lessons:
      'Encoding volatile domain logic in a configurable rule engine — rather than code — is what makes a compliance pipeline durable. Decoupling delivery (microservices → S3) from processing (Airflow) kept the system recoverable and auditable.'
  },
  {
    id: 'lighthouse-core',
    title: 'Lighthouse — Enterprise Data Platform',
    tagline: 'A decoupled ELT platform ingesting 150M+ rows from volatile vendor APIs into a governed warehouse.',
    tags: ['Airflow', 'dbt', 'AWS S3', 'PostgreSQL', 'FastAPI', 'PyArrow', 'OAuth2'],
    accent: 'purple',
    featured: true,
    fromCodebase: true,
    problem:
      'Light Finance had no direct database access to its core loan-management system (Finflux) and relied on highly volatile, rate-limited vendor APIs. Critical loan and transaction data was locked in the operational core, analysts spent 8+ hours a day manually building Excel reports, and mandatory credit-bureau submissions (fixed-width TUDF) under strict deadlines created constant regulatory risk.',
    scale: [
      '90+ operational tables ingested',
      '150M+ historical records',
      '30M+ rows daily throughput',
      '100+ report variants served via self-service portal'
    ],
    challenges: [
      'Vendor APIs introduced silent schema drift and unpredictable payload shapes.',
      'OAuth2 tokens expired hourly, causing 401 cascade failures across parallel workers.',
      '2M+ row tables caused out-of-memory crashes on standard workers.',
      'Maintaining 90+ hand-written DAGs was unsustainable technical debt.'
    ],
    solution:
      'I architected a strict Extract-Load-Transform platform. A config-driven DAG Factory generates Airflow DAGs at runtime from tables.json. Generic OAuth2 extractors stream JSON into Snappy-compressed Parquet on S3 (an immutable data lake), which is bulk-loaded into PostgreSQL as schema-agnostic TEXT, then shaped by dbt across staging/intermediate/mart layers with data-quality tests. A FastAPI microservice with RBAC serves 100+ reports and automates CIBIL TUDF generation, with MS Teams alerting throughout.',
    architecture: `flowchart LR
    subgraph SaaS["Core Banking SaaS"]
        API[("Finflux JSON API")]
    end
    subgraph Extract["Extraction (Airflow)"]
        DAG["Dynamic DAG Factory"]
        PY["PyArrow Extractor<br/>(OAuth2 + chunking)"]
    end
    subgraph Lake["Data Lake"]
        S3[("AWS S3<br/>Snappy Parquet")]
    end
    subgraph WH["Warehouse"]
        PG[("PostgreSQL / RDS")]
        DBT["dbt-core<br/>staging→mart"]
    end
    subgraph Serve["Delivery"]
        API2["FastAPI Portal<br/>(RBAC, 100+ reports)"]
        TUDF["TUDF Bureau Files"]
        TEAMS["MS Teams Alerts"]
    end
    API --> PY
    DAG --> PY --> S3 --> PG --> DBT --> API2
    DBT --> TUDF
    DAG -.-> TEAMS`,
    techStack: ['Python', 'Apache Airflow 3.x', 'dbt-core 1.7.9', 'PostgreSQL (AWS RDS)', 'AWS S3', 'PyArrow / Parquet', 'FastAPI', 'SQLAlchemy', 'Azure Blob', 'OAuth2'],
    impact: [
      { value: '150M+', label: 'Historical records' },
      { value: '30M+', label: 'Rows / day throughput' },
      { value: '8 hrs/day', label: 'Manual work eliminated' },
      { value: 'Zero', label: 'Regulatory penalty risk' }
    ],
    outcome:
      'Lighthouse became the central data foundation for the Non-MFI business unit: compliant, automated bureau submissions; consistent partner reporting; and self-service analytics — all decoupled from the fragile operational core with 99.9%+ reliability.',
    lessons:
      'Decoupling extraction from loading via an S3 data lake makes the whole system recoverable without re-taxing fragile APIs. Pushing schema enforcement down to dbt (raw TEXT in, typed out) is what lets pipelines survive upstream vendor changes.'
  },
  {
    id: 'geo-analytics',
    title: 'Enterprise Geo Analytics Platform',
    tagline: 'Lifting verified geo-location coverage from 34% to 97% across all branches in 6 months.',
    tags: ['Data Ingestion', 'Geospatial', 'Warehouse', 'BI', 'Data Quality'],
    accent: 'cyan',
    featured: false,
    problem:
      'Only 34% of organizational centers had verified geo-location information across all branches. Field operations and business teams lacked reliable location intelligence, making territory planning, branch analytics, and field decisions guesswork.',
    scale: [
      'All organizational branches / centers in scope',
      'Multiple disparate sources: APIs, files, internal systems',
      'Coverage target: organization-wide verified geolocation'
    ],
    challenges: [
      'Location data was fragmented across APIs, flat files, and internal systems with no single owner.',
      'Inconsistent formats and unverified coordinates required heavy standardization.',
      'Field and business teams needed consumable intelligence, not raw lat/long dumps.'
    ],
    solution:
      'I collected data from APIs, files, and internal systems and built ingestion pipelines to centralize it. The data was standardized and transformed into clean geo-location datasets in a centralized warehouse, then exposed through reporting and visualization layers so business and field teams could directly consume location intelligence.',
    architecture: `flowchart LR
    subgraph Sources["Sources"]
        A["APIs"]
        F["Files"]
        I["Internal Systems"]
    end
    subgraph Pipe["Ingestion + Standardization"]
        ING["Ingestion Pipelines"]
        STD["Standardize &<br/>Transform Geo Data"]
    end
    subgraph WH["Warehouse"]
        DS[("Centralized<br/>Geo Datasets")]
    end
    subgraph Consume["Consumption"]
        VIZ["Reporting &<br/>Visualization"]
        FIELD["Field & Business<br/>Teams"]
    end
    A --> ING
    F --> ING
    I --> ING
    ING --> STD --> DS --> VIZ --> FIELD`,
    techStack: ['Python', 'ETL Pipelines', 'Data Warehouse', 'Geospatial standardization', 'BI / Visualization'],
    impact: [
      { value: '34% → 97%', label: 'Verified geo coverage' },
      { value: '6 months', label: 'Time to achieve' },
      { value: 'Org-wide', label: 'Branch intelligence' },
      { value: 'Better', label: 'Operational decisions' }
    ],
    outcome:
      'Verified geo-location coverage rose from 34% to 97% within six months, giving field and business teams reliable location intelligence and enabling materially better operational decision-making.',
    lessons:
      'A measurable coverage metric (34%→97%) turns an abstract "data quality" effort into a clear business win. Standardizing at ingestion and centralizing in the warehouse made the data trustworthy enough for the field to actually use.'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics Platform',
    tagline: 'A centralized feature pipeline powering loan-approval and collection-default models.',
    tags: ['Feature Engineering', 'ML Enablement', 'Data Integration', 'Warehouse', 'Automation'],
    accent: 'purple',
    featured: false,
    problem:
      'Loan-approval prediction and collection-default prediction workflows required heavy manual data preparation. Data was scattered across APIs, databases, files, and bureau datasets, so every model iteration meant repeating slow, error-prone feature assembly.',
    scale: [
      'Multiple ML use-cases: approval + default prediction',
      'Four source classes unified: APIs, DBs, files, bureau data',
      'Repeatable, model-ready datasets on a schedule'
    ],
    challenges: [
      'Source data was siloed and inconsistent, blocking repeatable feature engineering.',
      'Manual data prep dominated the modeling timeline and introduced drift between runs.',
      'Model outputs needed a reliable path back into production systems.'
    ],
    solution:
      'I built a centralized ingestion framework that unifies data from multiple sources, then transformation pipelines that produce clean, model-ready datasets stored in the warehouse. These trigger downstream ML workflows, and the resulting model outputs are published back to production systems — turning a manual, ad-hoc process into a repeatable predictive-analytics pipeline.',
    architecture: `flowchart LR
    subgraph Sources["Sources"]
        A["APIs"]
        D["Databases"]
        F["Files"]
        B["Bureau Data"]
    end
    subgraph Unify["Centralized Ingestion"]
        ING["Ingestion Framework"]
        FE["Feature / Transform<br/>Pipelines"]
    end
    subgraph WH["Warehouse"]
        MR[("Model-Ready<br/>Datasets")]
    end
    subgraph ML["ML + Serving"]
        MODEL["Downstream<br/>ML Workflows"]
        PROD["Publish to<br/>Production Systems"]
    end
    A --> ING
    D --> ING
    F --> ING
    B --> ING
    ING --> FE --> MR --> MODEL --> PROD`,
    techStack: ['Python', 'ETL / Feature Pipelines', 'Data Warehouse', 'ML Workflow Orchestration', 'Bureau Data Integration'],
    impact: [
      { value: 'Automated', label: 'Feature preparation' },
      { value: 'Reduced', label: 'Operational overhead' },
      { value: 'Improved', label: 'Model deployment flow' },
      { value: 'Repeatable', label: 'Predictive pipelines' }
    ],
    outcome:
      'Feature preparation became automated and repeatable, cutting operational overhead and improving the model-deployment workflow — giving data science a dependable foundation for approval and default prediction.',
    lessons:
      'The highest-leverage ML work is often data engineering: a unified, model-ready feature layer removes the biggest bottleneck in the modeling lifecycle and makes results reproducible.'
  },
  {
    id: 'auto-fund-tagging',
    title: 'Auto Fund Tagging Platform',
    tagline: 'Automating complex fund-allocation and loan-tagging logic across partners and finance rules.',
    tags: ['Automation', 'Rule-Driven', 'LMS Integration', 'Warehouse', 'Finance Ops'],
    accent: 'cyan',
    featured: false,
    problem:
      'Fund allocation and loan tagging depended on constantly changing finance rules, partner requirements, eligibility criteria, DPD restrictions, funding limits, and multiple operational constraints. Doing this manually was inefficient, error-prone, and impossible to scale as loan volume and partner count grew.',
    scale: [
      'Multiple lending partners with distinct fund requirements',
      'Many interacting constraints: eligibility, DPD, funding limits, off-book exclusions',
      'Allocation results integrated back into LMS systems'
    ],
    challenges: [
      'Allocation logic combined finance rules, partner availability, DPD eligibility, and off-book exclusions simultaneously.',
      'Rules changed frequently, so hardcoded logic would constantly break.',
      'Outputs had to flow back accurately into LMS systems to be operationally useful.'
    ],
    solution:
      'I built an automated allocation workflow driven by LMS data, finance rules, lending-partner requirements, off-book loan exclusions, partner fund availability, DPD eligibility, and customer-eligibility logic. The warehouse-driven workflow computes allocations against all constraints and integrates the resulting tags back into the LMS systems.',
    architecture: `flowchart LR
    subgraph Inputs["Inputs"]
        LMS["LMS Data"]
        FIN["Finance Rules"]
        PART["Partner Reqs &<br/>Fund Availability"]
        ELIG["DPD / Customer<br/>Eligibility"]
    end
    subgraph Engine["Allocation Engine (Warehouse-driven)"]
        EXC["Off-book<br/>Exclusions"]
        ALLOC["Constraint-based<br/>Allocation Logic"]
    end
    subgraph Out["Output"]
        TAG["Fund Tags"]
        BACK["Integrate back<br/>into LMS"]
    end
    LMS --> EXC
    FIN --> ALLOC
    PART --> ALLOC
    ELIG --> ALLOC
    EXC --> ALLOC --> TAG --> BACK`,
    techStack: ['Python', 'SQL / Warehouse', 'Rule-driven allocation', 'LMS Integration', 'Airflow-style orchestration'],
    impact: [
      { value: 'Automated', label: 'Complex allocation' },
      { value: 'Reduced', label: 'Manual effort' },
      { value: 'Improved', label: 'Allocation accuracy' },
      { value: 'Scalable', label: 'Operational growth' }
    ],
    outcome:
      'Complex, constantly-shifting allocation logic became an automated, accurate, and scalable workflow — removing manual effort and letting fund tagging keep pace with business growth.',
    lessons:
      'When business rules change weekly, the win is a data-driven engine that treats rules as configuration. Closing the loop back into the LMS is what turned an analytics output into an operational system.'
  }
];

export default caseStudies;
