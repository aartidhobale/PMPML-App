import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import JournyPlanner from './pages/JournyPlanner';
import MediaCenter from './pages/MediaCenter';
import OnlineServices from './pages/OnlineServices';
import Tenders from './pages/Tenders';
import NotFound from './pages/NotFound'; 

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journy-planner" element={<JournyPlanner />} />
        <Route path="/media-center" element={<MediaCenter />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default App;
