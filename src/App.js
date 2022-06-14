import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Commercial from './components/Commercial';
import Domestic from './components/Domestic';
import Maintenance from './components/Maintenance';
import Thermographic from './components/Thermographic';
import Cbus from './components/Cbus';
import Catering from './components/Catering';
import Energymate from './components/Energymate';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './styles/style.css';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="commercial" element={<Commercial />} />
            <Route path="domestic" element={<Domestic />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="thermographic-scanning" element={<Thermographic />} />
            <Route path="cbus" element={<Cbus />} />
            <Route path="commercial-catering" element={<Catering />} />
            <Route path="energymate" element={<Energymate />} />
            <Route path="online-quotebook-job" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
