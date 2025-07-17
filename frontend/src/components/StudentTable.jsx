export default function StudentTable({ students }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-900">
      <table className="min-w-full bg-gray-900 text-white border border-gray-800">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-3 px-4 border-b border-gray-700 text-blue-400">Name</th>
            <th className="py-3 px-4 border-b border-gray-700 text-blue-400">Email</th>
            <th className="py-3 px-4 border-b border-gray-700 text-blue-400">Fees Paid</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center hover:bg-gray-800 transition">
              <td className="py-2 px-4 border-b border-gray-800">{student.name}</td>
              <td className="py-2 px-4 border-b border-gray-800">{student.email}</td>
              <td className="py-2 px-4 border-b border-gray-800">
                {student.feesPaid ? (
                  <span className="inline-block px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold">Yes</span>
                ) : (
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 