import React from 'react';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { AboutMe } from './components/AboutMe';

import torchImg from './assets/torch.gif';

const App = () => (
  <Router>
    <div className="flex flex-col justify-start items-center min-h-screen bg-slate-800">
      <div className="p-5 mt-4">
        <Sidebar />
        {/* <Popup /> */}
      </div> 
      <div className="p-5 mt-10"> {/* Adjust layout */}
        <Routes>
          <Route path="/" element={ <AboutMe /> } />
          <Route path="/education" element={ <Education /> } />
          <Route path="/experience" element={ <Experience /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/skills" element={ <Skills /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </div>
    </div>
    <div>
        <img src={torchImg} alt="" className="absolute bottom-[0vh] left-20 "/>
        <img src={torchImg} alt="" className="absolute bottom-[0vh] right-20 "/>
    </div>
  </Router>
);

export default App;