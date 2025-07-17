import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { apiRequest } from '../utils/api';
import PaymentForm from '../components/PaymentForm';

export default function PayFees() {
  const { token, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePay = async () => {
    setLoading(true);
    setError('');
    try {
      const updatedUser = await apiRequest('/profile/pay', { method: 'PUT', token });
      setUser(updatedUser);
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Payment failed');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Pay Fees</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <PaymentForm onPay={handlePay} loading={loading} />
      </div>
    </div>
  );
} 