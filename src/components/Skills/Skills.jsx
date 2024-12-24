import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skillCategories = {
    technical: ['HTML', 'CSS', 'SCSS', 'Javascript', 'ReactJS', 'C lang', 'Java'],
    tools: ['Github', 'Adobe XD', 'Figma']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" ref={ref}>
      <motion.h2 
        className={`section-heading ${inView ? 'in-view' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span>03.</span>skills
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Here are few technologies I've been working with:
      </motion.p>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="skill-header"><b>TECHNICAL SKILLS</b></div>
        <motion.ul variants={containerVariants}>
          {skillCategories.technical.map((skill, index) => (
            <motion.li key={skill} variants={itemVariants}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <div className="skill-header"><b>TOOLS</b></div>
        <motion.ul variants={containerVariants}>
          {skillCategories.tools.map((tool, index) => (
            <motion.li key={tool} variants={itemVariants}>
              {tool}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Skills;