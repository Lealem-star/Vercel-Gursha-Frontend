import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import GameControllerDashboard from './pages/GameControllerDashboard';
import GameDashboard from './pages/GameDashboard';
import GameControllerDetail from './pages/GameControllerDetail';
import DrawWinner from './pages/DrawWinner';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Use element prop instead of component */}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/GameController" element={<GameControllerDashboard />} />
          <Route path="/game/:gameId" element={<GameDashboard />} />
          <Route path="/gamecontrollerdashboard" element={<GameControllerDashboard />} />
          <Route path="/gameControllerDetail/:id" element={<GameControllerDetail />} />
          <Route path="/draw-winner/:gameId" element={<DrawWinner />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
