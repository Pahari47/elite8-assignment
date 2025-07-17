import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllStudents from './pages/AllStudents';
import Profile from './pages/Profile';
import PayFees from './pages/PayFees';
import useAuth from './hooks/useAuth';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center mt-8">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/students" element={<PrivateRoute><AllStudents /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/pay" element={<PrivateRoute><PayFees /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/students" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
