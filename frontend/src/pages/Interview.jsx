import React from 'react';

export default function Interview({ onNavigate }) {
  return (
    <div className="page-wrapper">
      <div className="page-card card">
        <div className="page-header">
          <h1>Interview Setup</h1>
          <p>Next step in the flow: Interview Setup, Chat, and Feedback Report.</p>
        </div>
        <button className="btn btn-primary" onClick={() => onNavigate('dashboard')}>
          Back to Dashboard
        </button>
      </div>

      <style>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background-color: var(--bg-color);
        }

        .page-card {
          width: 100%;
          max-width: 760px;
          padding: 36px;
          border-radius: var(--radius-lg);
          text-align: left;
        }

        .page-header h1 {
          margin-bottom: 12px;
          font-size: 32px;
        }

        .page-header p {
          color: var(--text-muted);
          margin-bottom: 24px;
        }
      `}</style>
    </div>
  );
}
