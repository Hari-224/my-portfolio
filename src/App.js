import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import CareerGrowthGraph from './components/CareerGrowthGraph/CareerGrowthGraph';
import Contact from './components/Contact/Contact';
import DebugConsole from './components/DebugConsole/DebugConsole';
import ProblemSolverMode from './components/ProblemSolverMode/ProblemSolverMode';

import './App.css';

const App = () => {
  return (
    <div className="App min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CareerGrowthGraph />
      <Contact />
      <DebugConsole />
      <ProblemSolverMode />
      <footer className="bg-black text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400">
            © 2024 John Developer. Built with React, designed with passion.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Code is poetry written for machines but meant to be read by humans."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
