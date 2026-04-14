import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// NavLink is like <Link> but adds an active class automatically
// when its href matches the current URL — perfect for nav highlighting

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Results', to: '/results' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: 'mailto:bommavaramvenkat2003@gmail.com' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NavLink's className can be a function that receives { isActive }
  // This lets us apply different styles for the active vs inactive link
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
    }`;

  return (
    <nav className={`sticky top-0 z-50 border-b border-gray-700 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gray-900/90 backdrop-blur-sm'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-white text-xl font-bold tracking-tight">
          Venkat<span className="text-blue-500">.dev</span>
          <span className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">v1.0</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.to.startsWith('mailto') ? (
                <a href={link.to} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  {link.label}
                </a>
              ) : (
                <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              )}
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
            link.to.startsWith('mailto') ? (
              <a key={link.label} href={link.to} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                {link.label}
              </a>
            ) : (
              <NavLink key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            )
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;