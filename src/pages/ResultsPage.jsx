import { useLocation, useNavigate } from 'react-router-dom';
import ItemsList from '../components/ItemsList';

// useLocation reads the state passed via navigate('/results', { state: {...} })
// useNavigate gives us programmatic navigation — go back, redirect, etc.

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // location.state holds whatever we passed from AnalyzerForm after submit
  const result = location.state?.result;

  const sentimentColor = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-yellow-400',
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-10">

      {/* Analysis result — only shown if navigated here from AnalyzerForm */}
      {result && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-md">
          <h2 className="text-white text-xl font-bold mb-4">Analysis Result</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Sentiment</span>
              <span className={`font-semibold capitalize ${sentimentColor[result.sentiment] || 'text-white'}`}>
                {result.sentiment}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Confidence Score</span>
              <span className="text-white font-semibold">{(result.score * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Word Count</span>
              <span className="text-white font-semibold">{result.word_count}</span>
            </div>
          </div>
        </div>
      )}

      {/* Items from FastAPI — always shown on this page */}
      <ItemsList />

      <button
        onClick={() => navigate('/')}
        className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
      >
        ← Analyze another text
      </button>
    </div>
  );
}

export default ResultsPage;