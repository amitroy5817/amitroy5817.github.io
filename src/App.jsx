import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;