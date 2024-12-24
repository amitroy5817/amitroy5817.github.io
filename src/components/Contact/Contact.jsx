import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="contact" ref={ref}>
      <motion.h2 
        className={`section-heading ${inView ? 'in-view' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span>04.</span>contact
      </motion.h2>
      <div className="contact-container">
        <motion.div 
          className="contact-details"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          <div className="contact-email">
            <h3>Get in Touch</h3>
            <a href="mailto:amitroy.thedev@gmail.com">
              amitroy.thedev@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
              </svg>
            </a>
          </div>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;