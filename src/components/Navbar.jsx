import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white text-xl font-bold tracking-tight">
          Venkat<span className="text-blue-500">.dev</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-700 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;