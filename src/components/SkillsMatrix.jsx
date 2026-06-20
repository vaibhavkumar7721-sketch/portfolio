import React from 'react';
import { Database, Cloud, Layers, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './SkillsMatrix.css';
import AnimatedSection from './AnimatedSection';

const SkillsMatrix = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const skillGroups = [
    {
      id: "engineering",
      category: "Compute & Orchestration Layer",
      icon: <Database size={28} className="text-cyan" />,
      skills: ["Apache Airflow", "PySpark", "Python", "Databricks", "Distributed Computing"],
      span: "col-span-2 row-span-2",
      description: "Building fault-tolerant data ingestion, distributed locks, and managing high-concurrency memory limits.",
      color: "cyan"
    },
    {
      id: "cloud",
      category: "Storage & Infra",
      icon: <Cloud size={24} className="text-purple" />,
      skills: ["AWS S3", "AWS RDS", "Docker", "Linux/Bash", "Azure Blob Storage"],
      span: "col-span-1 row-span-1",
      color: "purple"
    },
    {
      id: "warehousing",
      category: "Transformation & BI",
      icon: <Layers size={24} className="text-cyan" />,
      skills: ["dbt (Data Build Tool)", "PostgreSQL", "Snowflake", "Apache Superset"],
      span: "col-span-1 row-span-2",
      description: "Enforcing raw TEXT schemas into dimensional models using Jinja macros and safe-casting.",
      color: "cyan"
    },
    {
      id: "software",
      category: "Software Engineering",
      icon: <Code2 size={24} className="text-purple" />,
      skills: ["FastAPI", "Advanced SQL", "RESTful APIs", "OAuth2", "Git"],
      span: "col-span-2 row-span-1",
      color: "purple"
    }
  ];

  return (
    <AnimatedSection id="skills" className="skills-section section-container">
      <div className="section-header text-center">
        <h2 className="section-title">Platform Architecture Stack</h2>
        <p className="section-subtitle">
          The arsenal used to build highly-decoupled, massive-scale pipelines.
        </p>
      </div>

      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillGroups.map((group) => (
          <motion.div 
            key={group.id} 
            variants={itemVariants}
            className={`glass-panel bento-card ${group.span} hover-tilt`}
          >
            <div className={`bento-icon-wrapper glow-${group.color}`}>
              {group.icon}
            </div>
            <h3 className="bento-title">{group.category}</h3>
            {group.description && (
              <p className="bento-desc text-secondary">{group.description}</p>
            )}
            <div className="skill-tags">
              {group.skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default SkillsMatrix;
