import AnalyzerForm from '../components/AnalyzerForm';

function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-3">
          Text <span className="text-blue-500">Analyzer</span>
        </h1>
        <p className="text-gray-400">
          Enter any text below and get sentiment analysis from the FastAPI backend
        </p>
      </div>
      <AnalyzerForm />
    </div>
  );
}

export default HomePage;