import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold text-lg">Student Fee Manager</Link>
        {user && <Link to="/students" className="hover:underline">All Students</Link>}
        {user && <Link to="/profile" className="hover:underline">Profile</Link>}
      </div>
      <div className="flex items-center gap-4">
        {user && <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Logout</button>}
      </div>
    </nav>
  );
} 