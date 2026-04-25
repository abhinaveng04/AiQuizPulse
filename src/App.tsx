import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AdminDashboard } from './pages/AdminDashboard';
import { Lobby } from './pages/Lobby';
import { LiveQuiz } from './pages/LiveQuiz';
import { CorrectReveal } from './pages/CorrectReveal';
import { IncorrectReveal } from './pages/IncorrectReveal';
import { Leaderboard } from './pages/Leaderboard';
import { FinalResults } from './pages/FinalResults';
import { Analytics } from './pages/Analytics';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/live" element={<LiveQuiz />} />
      <Route path="/reveal/correct" element={<CorrectReveal />} />
      <Route path="/reveal/incorrect" element={<IncorrectReveal />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/results" element={<FinalResults />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}
