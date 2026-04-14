const STACK = [
  { label: 'React 18', desc: 'Functional components + hooks' },
  { label: 'Vite 8', desc: 'Fast dev server + HMR' },
  { label: 'TailwindCSS v4', desc: 'Utility-first styling' },
  { label: 'React Router v6', desc: 'Client-side routing' },
  { label: 'Axios', desc: 'HTTP client with instance config' },
  { label: 'FastAPI', desc: 'Python backend with auto docs' },
];

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-3">
          About <span className="text-blue-500">This Project</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          React Foundation — Day 2 of 3. Learning useEffect, axios, React Router v6
          by building a real frontend connected to a FastAPI backend.
        </p>
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-white text-xl font-bold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {STACK.map((item) => (
            <div key={item.label} className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
              <span className="text-blue-400 font-medium text-sm">{item.label}</span>
              <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h2 className="text-white text-xl font-bold mb-3">Built By</h2>
        <p className="text-gray-400 text-sm">Venkat — AI/ML Engineer @ WTX India, Hyderabad</p>
        
         <a href="https://github.com/Venkata1236/react-foundation"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 text-sm hover:text-blue-300 transition-colors mt-2 inline-block"
        >
          github.com/Venkata1236/react-foundation →
        </a>
      </div>
    </div>
  );
}

export default AboutPage;