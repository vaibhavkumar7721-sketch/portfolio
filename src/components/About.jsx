import React from 'react';
import { User, Cpu, Layers, Workflow } from 'lucide-react';
import './About.css';

const About = () => {
  const pillars = [
    {
      icon: <Cpu size={22} className="text-cyan" />,
      title: 'End-to-end ownership',
      desc: 'I take data products from volatile source APIs all the way to governed warehouses and self-service delivery — design, build, ship, and operate.'
    },
    {
      icon: <Layers size={22} className="text-purple" />,
      title: 'Platforms, not scripts',
      desc: 'Config-driven, dynamic, and reusable. I build systems that onboard new sources without new boilerplate and survive upstream change.'
    },
    {
      icon: <Workflow size={22} className="text-cyan" />,
      title: 'Business-first impact',
      desc: 'Every pipeline ties to an outcome: hours saved, risk removed, coverage gained. I think in metrics, not just bytes.'
    }
  ];

  return (
    <section id="about" className="about-section section-container">
      <div className="about-grid">
        <div className="about-intro">
          <div className="badge mb-4">
            <User size={16} className="text-cyan" />
            <span>About</span>
          </div>
          <h2 className="section-title text-left">
            Data Engineer who treats data as a product.
          </h2>
          <p className="about-text">
            I'm <strong>Vaibhav Kumar</strong>, a Data Engineer with 2 years of experience building
            data infrastructure for <strong>Light Finance</strong>, an NBFC operating in India's
            regulated microfinance sector. I work between <strong>Bengaluru and Delhi NCR</strong>.
          </p>
          <p className="about-text">
            I've architected and shipped the platforms that power regulatory compliance, partner
            reporting, and business intelligence — handling 150M+ records, automating credit-bureau
            processing for 500K+ clients, and replacing 8+ hours of daily manual work with pipelines
            that run themselves. I care about resilience, reproducibility, and the measurable
            difference good data engineering makes to a business.
          </p>
          <p className="about-text">
            I'm open to <strong>senior data engineering roles</strong> and selective
            <strong> freelance / consulting</strong> engagements in ETL/ELT, warehousing, Airflow,
            and reporting automation.
          </p>
        </div>

        <div className="about-pillars">
          {pillars.map((p, i) => (
            <div key={i} className="glass-panel pillar-card">
              <div className="pillar-icon">{p.icon}</div>
              <div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
