import React from 'react';

export default function PerformanceChart() {
  return (
    <div className="performance-card card">
      <div className="performance-header">
        <div>
          <p className="performance-title">Line Chart Placeholder</p>
          <p className="performance-copy">Your score trend over the last interviews.</p>
        </div>
      </div>
      <div className="performance-placeholder">Chart Placeholder</div>

      <style>{`
        .performance-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .performance-title {
          font-size: 16px;
          font-weight: 700;
        }

        .performance-copy {
          color: var(--text-muted);
          font-size: 14px;
        }

        .performance-placeholder {
          min-height: 260px;
          display: grid;
          place-items: center;
          border: 2px dashed var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-size: 14px;
          background-color: #FCFAF7;
        }
      `}</style>
    </div>
  );
}
