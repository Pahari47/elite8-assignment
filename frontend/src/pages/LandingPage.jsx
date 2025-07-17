import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from './Login';
import Signup from './Signup';

export default function LandingPage({ onLogin }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-4 drop-shadow-lg text-center">Student Fee Management</h1>
      <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl text-center drop-shadow">Easily manage your student fees, update your profile, and stay on top of your payments with a modern, secure platform.</p>
      <button
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-blue-700 transition"
        onClick={onLogin}
      >
        Get Started
      </button>
    </div>
  );
} 