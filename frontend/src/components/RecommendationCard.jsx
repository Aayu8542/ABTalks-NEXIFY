import React from 'react';

export default function RecommendationCard({ title, focus, improvement }) {
  return (
    <div className="recommendation-card card">
      <div className="recommendation-title">
        <p>{title}</p>
      </div>
      <p className="recommendation-detail">{focus}</p>
      <p className="recommendation-improvement">{improvement}</p>

      <style>{`
        .recommendation-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .recommendation-title p {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-color);
        }

        .recommendation-detail {
          color: var(--text-muted);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .recommendation-improvement {
          font-weight: 700;
          color: var(--primary-color);
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}
