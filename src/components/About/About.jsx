import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import photo from "../../assets/display-picture.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" ref={ref}>
      <motion.h2 
        className={`section-heading ${inView ? 'in-view' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span>01.</span>about
      </motion.h2>
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            <h2>Hello!</h2>
            My name is Amit. I am a Software Engineering student at GCELT (Government College of Engineering and Leather Technology), 
            I am good at <b>UI/UX Design</b> and <b>frontend development</b> and I am also interested to explore Full Stack Development. My interest in Development 
            started back when i was in my 8th standard, when the android was completely new for me.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Interested in Creating Things.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Not a Professional but a Passionate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Currently working @ nowhere
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a 
              href="https://drive.google.com/file/d/1tRviVOT3NxLErK4p8ia4O5OHZ_qEQn9t/view?usp=sharing" 
              className="download-cv" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        className="about-image"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img 
          src={photo}
          alt="display-photo"
        />
      </motion.div>
    </section>
  );
};

export default About;