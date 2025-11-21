import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MissionVisionPage from './pages/MissionVisionPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission-vision" element={<MissionVisionPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
