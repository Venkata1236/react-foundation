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
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
        <ProfileCard
          name="Venkat"
          role="AI/ML Engineer @ WTX India"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=venkat"
        />
        <TodoList />
      </main>

      <footer className="text-center text-gray-600 text-xs py-6">
        Built by Venkat · AI/ML Engineer · 2026 © All rights reserved.
      </footer>
    </div>
  );
}

export default App;