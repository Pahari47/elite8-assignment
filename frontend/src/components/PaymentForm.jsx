import { useState } from 'react';

export default function PaymentForm({ onPay, loading }) {
  const [card, setCard] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPay({ card, name });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-400">Card Number</label>
        <input
          type="text"
          className="w-full border border-gray-700 bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={card}
          onChange={e => setCard(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium text-blue-400">Name on Card</label>
        <input
          type="text"
          className="w-full border border-gray-700 bg-gray-900 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full font-semibold"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
} 