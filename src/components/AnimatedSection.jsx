import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  duration = 0.6,
  id = ""
}) => {
  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = {
    opacity: 0,
    ...directionOffset[direction]
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for premium feel
    }
  };

  return (
    <motion.div
      id={id}
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
