export default function StudentTable({ students }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Fees Paid</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.feesPaid ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 