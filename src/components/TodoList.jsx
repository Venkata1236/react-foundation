import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: Date.now(), text: trimmed, completed: false }]);
    setInputValue('');
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddTodo();
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-900/20 hover:shadow-xl p-6 w-full max-w-md border border-gray-700 hover:border-blue-900 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-2xl font-bold">Todo List</h2>
        {todos.length > 0 && (
            <button
             onClick={() => setTodos([])}
             className="text-xs text-red-400 hover:text-red-300 transition-colors"
            >
                Clear all
            </button>
        )}
      </div>    
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-gray-500 text-xs text-right">{inputValue.length}/100</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={100}
          placeholder="Add a new task..."
          className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-4">
          No todos yet — add something above ☝️
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3 group">
              <span
                onClick={() => handleToggle(todo.id)}
                className={`flex-1 cursor-pointer text-sm transition-all ${
                  todo.completed ? 'line-through text-gray-500' : 'text-white'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleRemove(todo.id)}
                className="ml-3 text-red-400 hover:text-red-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <p className="text-gray-500 text-xs mt-4 text-right">
          {todos.filter((t) => t.completed).length} / {todos.length} completed
        </p>
      )}
    </div>
  );
}

export default TodoList;