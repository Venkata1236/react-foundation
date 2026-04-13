import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
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