import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';

// BrowserRouter must wrap everything that uses routing hooks (NavLink, useNavigate, etc.)
// Routes renders ONLY the first Route that matches the current URL
// The * path is a catch-all — handles any URL that didn't match above

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <span className="text-6xl">404</span>
              <p className="text-gray-400">Page not found</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;