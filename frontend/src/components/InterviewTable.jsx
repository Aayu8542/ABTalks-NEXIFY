import React from 'react';

const interviews = [
  { name: 'Technical AI Engineer', date: 'Jul 28, 2026', score: '82%', status: 'Completed' },
  { name: 'RAG Fundamentals', date: 'Jul 22, 2026', score: '75%', status: 'Completed' },
  { name: 'Vector Databases', date: 'Jul 15, 2026', score: '88%', status: 'Completed' },
];

export default function InterviewTable() {
  return (
    <div className="table-card card">
      <table className="interview-table">
        <thead>
          <tr>
            <th>Interview Name</th>
            <th>Date</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.score}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .interview-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 100%;
        }

        .interview-table th,
        .interview-table td {
          padding: 16px 14px;
          text-align: left;
          font-size: 14px;
        }

        .interview-table th {
          color: var(--text-muted);
          font-weight: 700;
          border-bottom: 1px solid var(--border-color);
        }

        .interview-table tbody tr {
          border-bottom: 1px solid var(--border-color);
        }

        .interview-table tbody tr:last-child {
          border-bottom: none;
        }

        .interview-table tbody td {
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
}
