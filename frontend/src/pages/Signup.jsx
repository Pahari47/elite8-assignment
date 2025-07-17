import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Signup({ isModal, onSwitch }) {
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
      if (isModal) window.location.reload();
      else navigate('/students');
    } catch (err) {
      setError(err.message || 'Signup failed');
    }
    setLoading(false);
  };

  const form = (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input type="text" className="w-full border px-3 py-2 rounded" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input type="email" className="w-full border px-3 py-2 rounded" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="mb-6">
        <label className="block mb-1">Password</label>
        <input type="password" className="w-full border px-3 py-2 rounded" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
      <div className="mt-4 text-center">
        Already have an account?{' '}
        {isModal ? (
          <button type="button" className="text-blue-600 hover:underline" onClick={onSwitch}>Login</button>
        ) : (
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        )}
      </div>
    </form>
  );

  if (isModal) return form;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">{form}</div>
  );
} 