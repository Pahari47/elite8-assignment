import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import AllStudents from './pages/AllStudents';
import Profile from './pages/Profile';
import PayFees from './pages/PayFees';
import useAuth from './hooks/useAuth';
import LandingPage from './pages/LandingPage';
import Modal from './components/Modal';
import Login from './pages/Login';
import Signup from './pages/Signup';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center mt-8">Loading...</div>;
  return user ? children : <Navigate to="/" />;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState('login');

  const handleLogin = () => {
    setTab('login');
    setModalOpen(true);
  };
  const handleSwitch = (to) => setTab(to);
  const handleSuccess = (navigate) => {
    setModalOpen(false);
    if (navigate) navigate('/profile');
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-950 text-white">
          <Navbar onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/students" element={<PrivateRoute><AllStudents /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/pay" element={<PrivateRoute><PayFees /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
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
              <Login isModal onSwitch={() => handleSwitch('signup')} onSuccess={() => handleSuccess()} />
            ) : (
              <Signup isModal onSwitch={() => handleSwitch('login')} onSuccess={() => handleSuccess()} />
            )}
          </Modal>
        </div>
      </Router>
    </AuthProvider>
  );
}
