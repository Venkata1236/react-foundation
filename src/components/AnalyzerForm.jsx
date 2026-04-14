import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeText } from '../services/api';

function AnalyzerForm() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useNavigate returns a function. Call navigate('/path') to redirect.
  // Pass state as second arg — available on the destination page via useLocation()
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const result = await analyzeText(text);
      // Navigate to /results AND pass the result data as route state
      // This avoids prop drilling or global state for simple one-time data passing
      navigate('/results', { state: { result } });
    } catch (err) {
      setError(err.response?.data?.detail || err.message || 'Analysis failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) handleSubmit();
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-lg">
      <h2 className="text-white text-xl font-bold mb-4">Analyze Text</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter text to analyze sentiment... (e.g. 'This product is amazing and great!')"
        rows={4}
        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-sm"
      />

      {/* Inline error — never use alert() in production */}
      {error && (
        <p className="text-red-400 text-xs mt-2">⚠️ {error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            {/* Inline spinner on the button itself */}
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Analyzing...
          </>
        ) : (
          'Analyze →'
        )}
      </button>
    </div>
  );
}

export default AnalyzerForm;