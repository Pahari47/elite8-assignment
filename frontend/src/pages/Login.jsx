import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login({ isModal, onSwitch, onSuccess }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      if (isModal && onSuccess) onSuccess();
      else navigate('/profile');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
    setLoading(false);
  };

  const form = (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-md w-full">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-400">Login</h2>
      {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 text-blue-300 font-semibold">Email</label>
        <input type="email" className="w-full border border-gray-700 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-blue-300 font-semibold">Password</label>
        <input type="password" className="w-full border border-gray-700 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold text-lg transition mb-2" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <div className="mt-4 text-center text-gray-300">
        Don't have an account?{' '}
        {isModal ? (
          <button type="button" className="text-blue-400 hover:underline font-semibold" onClick={onSwitch}>Sign up</button>
        ) : (
          <Link to="/signup" className="text-blue-400 hover:underline font-semibold">Sign up</Link>
        )}
      </div>
    </form>
  );

  if (isModal) return form;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">{form}</div>
  );
} 