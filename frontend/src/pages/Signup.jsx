import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Signup({ isModal, onSwitch, onSuccess }) {
  const { signup } = useAuth();
  const [name, setName] = useState('');
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
      await signup(name, email, password);
      if (isModal && onSuccess) onSuccess();
      else navigate('/profile');
    } catch (err) {
      setError(err.message || 'Signup failed');
    }
    setLoading(false);
  };

  const form = (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-md w-full">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-400">Sign Up</h2>
      {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 text-blue-300 font-semibold">Name</label>
        <input type="text" className="w-full border border-gray-700 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-blue-300 font-semibold">Email</label>
        <input type="email" className="w-full border border-gray-700 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-blue-300 font-semibold">Password</label>
        <input type="password" className="w-full border border-gray-700 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold text-lg transition mb-2" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
      <div className="mt-4 text-center text-gray-300">
        Already have an account?{' '}
        {isModal ? (
          <button type="button" className="text-blue-400 hover:underline font-semibold" onClick={onSwitch}>Login</button>
        ) : (
          <Link to="/login" className="text-blue-400 hover:underline font-semibold">Login</Link>
        )}
      </div>
    </form>
  );

  if (isModal) return form;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">{form}</div>
  );
} 