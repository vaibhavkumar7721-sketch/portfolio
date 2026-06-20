import React from 'react';
import { AlertTriangle, Clock, Layers, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './Challenge.css';

const Challenge = () => {
  const challenges = [
    {
      icon: <AlertTriangle size={24} className="text-purple" />,
      title: "Regulatory Compliance",
      desc: "Mandatory Credit Bureau submissions required highly specific formats (like TUDF) under strict deadlines. Errors could lead to severe penalties."
    },
    {
      icon: <Layers size={24} className="text-cyan" />,
      title: "Data Silos",
      desc: "Critical loan and transaction data was locked within the operational core banking system, unoptimized for analytical querying."
    },
    {
      icon: <Clock size={24} className="text-purple" />,
      title: "Manual Bottlenecks",
      desc: "Analysts spent 8+ hours daily manually extracting, reconciling, and formatting Excel reports for partners and internal teams."
    },
    {
      icon: <ShieldCheck size={24} className="text-cyan" />,
      title: "Data Integrity",
      desc: "Without automated reconciliation, ensuring 100% accuracy of financial reports distributed to external partners was a monumental risk."
    }
  ];

  return (
    <AnimatedSection id="challenge" className="challenge-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">The Challenge</h2>
        <p className="section-subtitle">
          Scaling operations exposed critical bottlenecks in data delivery, 
          compliance reporting, and business intelligence.
        </p>
      </div>

      <div className="challenges-grid">
        {challenges.map((item, index) => (
          <div key={index} className="glass-panel challenge-card">
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Challenge;
