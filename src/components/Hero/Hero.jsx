import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Amit Roy
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Frontend Developer
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SocialLinks />
      </motion.div>
    </section>
  );
};

export default Hero;