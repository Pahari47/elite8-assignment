import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { apiRequest } from '../utils/api';
import ProfileForm from '../components/ProfileForm';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, token, logout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!user) return null;

  const handleSave = async (data) => {
    setLoading(true);
    setError('');
    try {
      await apiRequest('/profile', { method: 'PUT', body: data, token });
      window.location.reload();
    } catch (err) {
      setError(err.message || 'Update failed');
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400 text-center">Profile</h1>
      {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
      {editing ? (
        <ProfileForm user={user} onSave={handleSave} loading={loading} />
      ) : (
        <div>
          <div className="mb-2"><span className="font-medium text-gray-300">Name:</span> <span className="text-white">{user.name}</span></div>
          <div className="mb-2"><span className="font-medium text-gray-300">Email:</span> <span className="text-white">{user.email}</span></div>
          <div className="mb-2"><span className="font-medium text-gray-300">Fees Paid:</span> {user.feesPaid ? (
            <span className="inline-block px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold ml-2">Yes</span>
          ) : (
            <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold ml-2">No</span>
          )}</div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-4">
            <button onClick={() => setEditing(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto">Edit</button>
            <button
              onClick={() => navigate('/pay')}
              className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto ${user.feesPaid ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={user.feesPaid}
            >
              Pay Fees
            </button>
            <button onClick={logout} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition w-full sm:w-auto">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
} 