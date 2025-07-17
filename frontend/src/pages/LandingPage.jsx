import { useState } from 'react';
import Modal from '../components/Modal';
import Login from './Login';
import Signup from './Signup';

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState('login');

  const handleSwitch = (to) => setTab(to);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-green-400">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Student Fee Management</h1>
      <p className="text-lg md:text-2xl text-white mb-8 max-w-xl text-center drop-shadow">Easily manage your student fees, update your profile, and stay on top of your payments with a modern, secure platform.</p>
      <button
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition text-lg"
        onClick={() => setModalOpen(true)}
      >
        Get Started
      </button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l ${tab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r ${tab === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setTab('signup')}
          >
            Sign Up
          </button>
        </div>
        {tab === 'login' ? (
          <Login isModal onSwitch={() => handleSwitch('signup')} />
        ) : (
          <Signup isModal onSwitch={() => handleSwitch('login')} />
        )}
      </Modal>
    </div>
  );
} 