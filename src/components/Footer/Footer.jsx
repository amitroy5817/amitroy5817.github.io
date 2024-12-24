import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      ref={ref}
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Made with
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="heart"
          >
            ❤️
          </motion.span>
          by <span className="name">Amit Roy</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;