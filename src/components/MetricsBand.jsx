import React from 'react';
import './MetricsBand.css';

const MetricsBand = () => {
  const metrics = [
    { value: '150M+', label: 'Records engineered' },
    { value: '500K+', label: 'Clients automated' },
    { value: '99.99%', label: 'Processing accuracy' },
    { value: '34% → 97%', label: 'Geo coverage lifted' },
    { value: '8 hrs/day', label: 'Manual work removed' },
    { value: 'Zero', label: 'Regulatory penalties' }
  ];

  return (
    <section className="metrics-band">
      <div className="metrics-band-inner">
        {metrics.map((m, i) => (
          <div key={i} className="band-metric">
            <div className="band-value text-gradient">{m.value}</div>
            <div className="band-label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsBand;
