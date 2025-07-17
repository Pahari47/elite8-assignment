import { useState } from 'react';

export default function PaymentForm({ onPay, loading }) {
  const [card, setCard] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPay({ card, name });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <div className="mb-4">
        <label className="block mb-1 font-medium">Card Number</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={card}
          onChange={e => setCard(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name on Card</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
} 