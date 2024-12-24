import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon } from '../Icons';

const ProjectCard = ({ project, delay }) => {
  const { title, url, description, features } = project;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div 
      className="project"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title} <ExternalLinkIcon />
        </a>
      </h3>
      <p>{description}</p>
      <motion.ul 
        className="features"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <li><b>Key Features & Achievements</b></li>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectCard;
