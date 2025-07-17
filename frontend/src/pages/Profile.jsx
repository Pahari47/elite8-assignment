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
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {editing ? (
        <ProfileForm user={user} onSave={handleSave} loading={loading} />
      ) : (
        <div>
          <div className="mb-2"><span className="font-medium">Name:</span> {user.name}</div>
          <div className="mb-2"><span className="font-medium">Email:</span> {user.email}</div>
          <div className="mb-2"><span className="font-medium">Fees Paid:</span> {user.feesPaid ? 'Yes' : 'No'}</div>
          <div className="flex gap-4 mt-4">
            <button onClick={() => setEditing(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
            {!user.feesPaid && (
              <button onClick={() => navigate('/pay')} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Pay Fees</button>
            )}
            <button onClick={logout} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
} 