import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Navbar({ onLogin }) {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold text-xl md:text-2xl tracking-wide text-blue-400">Student Fee Manager</Link>
        {user && <Link to="/students" className="hover:text-blue-400 transition">All Students</Link>}
        {user && <Link to="/profile" className="hover:text-blue-400 transition">Profile</Link>}
      </div>
      <div className="flex items-center gap-4">
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
    </nav>
  );
} 