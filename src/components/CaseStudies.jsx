import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import {
  ChevronDown, ChevronUp, AlertTriangle, Layers, Wrench,
  CheckCircle2, TrendingUp, Target, Lightbulb, GitBranch, MessageSquare
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import './CaseStudies.css';

const Diagram = ({ chart, id }) => {
  const ref = useRef(null);
  const [svg, setSvg] = useState('');

  useEffect(() => {
    let cancelled = false;
    mermaid.initialize({ startOnLoad: false, theme: 'dark', fontFamily: 'Inter, sans-serif' });
    mermaid
      .render(`mmd-${id}`, chart)
      .then(({ svg }) => { if (!cancelled) setSvg(svg); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [chart, id]);

  return <div className="cs-diagram" ref={ref} dangerouslySetInnerHTML={{ __html: svg }} />;
};

const CaseStudyCard = ({ study, index }) => {
  const [open, setOpen] = useState(study.featured && index === 0);

  return (
    <div className={`glass-panel cs-card accent-${study.accent} ${open ? 'open' : ''}`}>
      <button className="cs-card-header" onClick={() => setOpen(!open)}>
        <div className="cs-head-left">
          <span className={`cs-index text-${study.accent}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <div className="cs-card-title-row">
              <h3>{study.title}</h3>
              {study.fromCodebase && (
                <span className="cs-source-badge"><GitBranch size={12} /> Live codebase</span>
              )}
            </div>
            <p className="cs-tagline">{study.tagline}</p>
            <div className="cs-tags">
              {study.tags.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="cs-toggle">{open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}</div>
      </button>

      {open && (
        <div className="cs-body">
          <div className="cs-grid">
            <div className="cs-block">
              <div className="cs-block-head"><AlertTriangle size={18} className="text-purple" /><h4>Problem</h4></div>
              <p>{study.problem}</p>
            </div>
            <div className="cs-block">
              <div className="cs-block-head"><Target size={18} className="text-cyan" /><h4>Scale</h4></div>
              <ul className="cs-list">{study.scale.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          </div>

          <div className="cs-block">
            <div className="cs-block-head"><GitBranch size={18} className="text-cyan" /><h4>Architecture</h4></div>
            <Diagram chart={study.architecture} id={study.id} />
          </div>

          <div className="cs-grid">
            <div className="cs-block">
              <div className="cs-block-head"><Layers size={18} className="text-purple" /><h4>Challenges</h4></div>
              <ul className="cs-list">{study.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
            </div>
            <div className="cs-block">
              <div className="cs-block-head"><Wrench size={18} className="text-cyan" /><h4>Solution</h4></div>
              <p>{study.solution}</p>
            </div>
          </div>

          {study.phases && (
            <div className="cs-block">
              <div className="cs-block-head"><Layers size={18} className="text-purple" /><h4>How it evolved</h4></div>
              <div className="cs-phases">
                {study.phases.map((phase, i) => (
                  <div key={i} className="cs-phase">
                    <div className="cs-phase-label">{phase.label}</div>
                    <p>{phase.description}</p>
                    <div className="cs-tags">
                      {phase.stack.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="cs-block">
            <div className="cs-block-head"><CheckCircle2 size={18} className="text-cyan" /><h4>Tech Stack</h4></div>
            <div className="cs-tags">
              {study.techStack.map((t) => <span key={t} className="tech-tag solid">{t}</span>)}
            </div>
          </div>

          <div className="cs-block">
            <div className="cs-block-head"><TrendingUp size={18} className="text-cyan" /><h4>Impact</h4></div>
            <div className="cs-metrics">
              {study.impact.map((m, i) => (
                <div key={i} className="cs-metric">
                  <div className="cs-metric-value text-gradient">{m.value}</div>
                  <div className="cs-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-grid">
            <div className="cs-block highlight-block">
              <div className="cs-block-head"><TrendingUp size={18} className="text-cyan" /><h4>Business Outcome</h4></div>
              <p>{study.outcome}</p>
            </div>
            <div className="cs-block highlight-block">
              <div className="cs-block-head"><Lightbulb size={18} className="text-purple" /><h4>Lessons Learned</h4></div>
              <p>{study.lessons}</p>
            </div>
          </div>

          <a href="#contact" className="cs-cta">
            <MessageSquare size={16} /> Discuss this project
          </a>
        </div>
      )}
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="work" className="cs-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Five platforms I designed and delivered — from regulated credit automation to geo-analytics —
          each framed as problem, architecture, and measurable business outcome.
        </p>
      </div>

      <div className="cs-stack">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
