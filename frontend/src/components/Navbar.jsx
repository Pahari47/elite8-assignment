import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Navbar({ onLogin }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold text-xl md:text-2xl tracking-wide text-blue-400">Student Fee Manager</Link>
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-4">
        {user && <Link to="/students" className="hover:text-blue-400 transition">All Students</Link>}
        {user && <Link to="/profile" className="hover:text-blue-400 transition">Profile</Link>}
        {!user && (
          <button
            onClick={onLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded shadow transition font-semibold"
          >
            Login
          </button>
        )}
        {user && (
          <button
            onClick={logout}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded shadow transition"
          >
            Logout
          </button>
        )}
      </div>
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-2xl px-2"
          aria-label="Toggle menu"
        >
          <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 flex flex-col items-center py-4 md:hidden animate-fadeInAndScale">
          {user && <Link to="/students" className="py-2 w-full text-center hover:text-blue-400" onClick={() => setMenuOpen(false)}>All Students</Link>}
          {user && <Link to="/profile" className="py-2 w-full text-center hover:text-blue-400" onClick={() => setMenuOpen(false)}>Profile</Link>}
          {!user && (
            <button
              onClick={() => { setMenuOpen(false); onLogin(); }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition font-semibold w-11/12 mx-auto my-2"
            >
              Login
            </button>
          )}
          {user && (
            <button
              onClick={() => { setMenuOpen(false); logout(); }}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded shadow transition w-11/12 mx-auto my-2"
            >
              Logout
            </button>
          )}
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        @keyframes fadeInAndScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInAndScale {
          animation: fadeInAndScale 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </nav>
  );
} 