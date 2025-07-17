import { useEffect, useState } from 'react';
import { apiRequest } from '../utils/api';
import useAuth from '../hooks/useAuth';
import StudentTable from '../components/StudentTable';

export default function AllStudents() {
  const { token } = useAuth();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await apiRequest('/students', { token });
        setStudents(data);
      } catch (err) {
        setError(err.message || 'Failed to load students');
      }
      setLoading(false);
    }
    fetchStudents();
  }, [token]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-8">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      <StudentTable students={students} />
    </div>
  );
} 