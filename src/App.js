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
            <Route path="content/commercial" element={<Commercial />} />
            <Route path="content/domestic" element={<Domestic />} />
            <Route path="content/maintenance" element={<Maintenance />} />
            <Route path="content/thermographic-scanning" element={<Thermographic />} />
            <Route path="content/cbus" element={<Cbus />} />
            <Route path="content/commercial-catering" element={<Catering />} />
            <Route path="content/energymate" element={<Energymate />} />
            <Route path="content/online-quotebook-job" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
