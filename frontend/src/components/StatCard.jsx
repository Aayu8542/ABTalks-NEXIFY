import React from 'react';

export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="stat-card card">
      <div className="stat-header">
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
      </div>
      <p className="stat-subtitle">{subtitle}</p>

      <style>{`
        .stat-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 14px;
        }

        .stat-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 800;
        }

        .stat-subtitle {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
