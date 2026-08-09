import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA({ onNavigate }) {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <div className="cta-card card">
          <div className="cta-badge">
            <Sparkles size={14} className="spark-icon" />
            <span>Accelerate Your Career</span>
          </div>
          <h2 className="cta-title">Ready for Your Next Technical Interview?</h2>
          <p className="cta-desc">
            Practice with AI and identify your knowledge gaps before the real interview. Set up custom targets and get hired faster.
          </p>
          <div className="cta-actions">
            <button onClick={() => onNavigate('login')} className="btn btn-primary btn-cta">
              Start Mock Interview <ArrowRight size={16} />
            </button>
            <a href="#" className="btn btn-secondary btn-cta">
              View Sample Reports
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          background-color: var(--bg-color);
          padding: 80px 0;
        }

        .cta-container {
          max-width: 960px;
        }

        .cta-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          padding: 56px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-lg);
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--primary-light);
          color: var(--primary-color);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          margin-bottom: 24px;
        }

        .spark-icon {
          color: var(--primary-color);
        }

        .cta-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          max-width: 520px;
          line-height: 1.2;
        }

        .cta-desc {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 580px;
          margin-bottom: 32px;
          line-height: 1.55;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
        }

        .btn-cta {
          padding: 12px 24px;
          font-size: 14.5px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .cta-card {
            padding: 40px 20px;
          }
          .cta-title {
            font-size: 26px;
          }
          .cta-desc {
            font-size: 14.5px;
          }
          .cta-actions {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
