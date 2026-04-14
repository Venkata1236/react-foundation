import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">
          Hey, I'm <span className="text-blue-500">Venkat</span> 👋
        </h1>
        <p className="text-gray-400 text-lg">
          AI/ML Engineer · Building real-world production projects
        </p>
        
          <a href="https://github.com/Venkata1236"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          View GitHub →
        </a>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <section className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-3">
        {['React', 'FastAPI', 'LangChain', 'Docker', 'AWS', 'Python', 'TailwindCSS'].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
          >
            {skill}
          </span>
        ))}
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
        <ProfileCard
          name="Venkat"
          role="AI/ML Engineer @ WTX India"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=venkat"
        />
        <TodoList />
      </main>

      <footer className="text-center text-gray-600 text-xs py-6 flex justify-center gap-6">
        <span>Built by Venkat · 2026</span>
        <a href="https://github.com/Venkata1236" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/venkatareddy1203" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;