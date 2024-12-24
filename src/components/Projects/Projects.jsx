import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="projects" ref={ref}>
      <motion.h2 
        className={`section-heading ${inView ? 'in-view' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span>02.</span>projects
      </motion.h2>
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.title} 
          project={project} 
          delay={0.2 + (index * 0.2)}
        />
      ))}
    </section>
  );
};

export default Projects;