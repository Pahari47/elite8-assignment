import { useState } from 'react';

export default function ProfileForm({ user, onSave, loading }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-400">Name</label>
        <input
          type="text"
          className="w-full border border-gray-700 bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-400">Email</label>
        <input
          type="email"
          className="w-full border border-gray-700 bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full font-semibold"
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
} 