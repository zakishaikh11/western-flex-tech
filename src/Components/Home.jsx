// Home.jsx
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import Feedbacks from './Feedback';
import AboutForm from './AboutForm';
import '../index.css';

function Home() {
  return (
    <div>
      <div id="home" className="mt-16">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="feedbacks">
        <Feedbacks />
      </div>
      <div id="about">
        <AboutForm />
      </div>
    </div>
  );
}
export default Home;