import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import ComponentDemo from './pages/ComponentDemo';
import { Toaster } from './components/ui';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        {/* Toaster renders toast notifications globally — placed once at root */}
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/demo" element={<ComponentDemo />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <span className="text-6xl text-white">404</span>
              <p className="text-gray-400">Page not found</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;