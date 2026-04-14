import { useState, useEffect } from 'react';
import { getItems } from '../services/api';

// The 3-state pattern — you will use this in ALL 20 projects.
// Every component that fetches data needs exactly these 3 states.
// isLoading → show spinner | error → show error message | data → show content

function ItemsList() {
  const [items, setItems] = useState([]);        // the actual data
  const [isLoading, setIsLoading] = useState(true); // true on first render
  const [error, setError] = useState(null);      // null = no error

  // useEffect analogy: think of it as "do this side effect after React finishes painting the UI"
  // The [] dependency array = "run this effect ONCE, right after the first render"
  // If you put [someVar] instead of [], it re-runs every time someVar changes
  // If you put nothing (no array), it re-runs after EVERY render — almost never what you want
  useEffect(() => {
    // We define the async function INSIDE useEffect because
    // useEffect's callback itself cannot be async (it must return cleanup or nothing)
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        setError(null); // clear any previous error before new fetch
        const data = await getItems();
        setItems(data);
      } catch (err) {
        // err.response exists if server responded with 4xx/5xx
        // err.message exists for network errors (no connection, timeout)
        setError(err.response?.data?.detail || err.message || 'Failed to fetch items');
      } finally {
        // finally always runs — whether success or error
        // This ensures spinner always stops even if the catch block throws
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []); // [] = run once on mount

  // --- Render states ---

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3">
        {/* Spinner: animate-spin rotates, border-t-blue-500 creates the colored arc */}
        <div className="w-8 h-8 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-4 text-red-400 text-sm">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-white text-2xl font-bold mb-6">Items from API</h2>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 border border-gray-700 hover:border-blue-900 rounded-xl px-5 py-4 flex items-center justify-between transition-all duration-200"
          >
            <div className="flex flex-col">
              <span className="text-white font-medium">{item.name}</span>
              <span className="text-gray-500 text-xs mt-0.5">{item.category}</span>
            </div>
            <span className="text-blue-400 font-semibold text-sm">
              ${item.price}
            </span>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-xs mt-4 text-right">{items.length} items loaded</p>
    </div>
  );
}

export default ItemsList;