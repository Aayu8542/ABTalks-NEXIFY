import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Capabilities() {
  const [activeStep, setActiveStep] = useState(0);

  const flowSteps = [
    {
      title: "Candidate Profile",
      description: "Resume parsed, target curriculum mapped, experience level set.",
      badge: "Stage 01"
    },
    {
      title: "Question Generation",
      description: "Core conceptual question drafted based on specific skill matrices.",
      badge: "Stage 02"
    },
    {
      title: "Follow-Up Questions",
      description: "Deep dive based on student answers to check limits of knowledge.",
      badge: "Stage 03"
    },
    {
      title: "Evaluation",
      description: "NLP modeling evaluates correctness, confidence, and vocabulary.",
      badge: "Stage 04"
    },
    {
      title: "Final Feedback",
      description: "Comprehensive progress logs and PDF scorecard generated.",
      badge: "Stage 05"
    }
  ];

  return (
    <section id="capabilities" className="capabilities-section">
      <div className="container">
        {/* SECTION 5: Interview Flow Timeline */}
        <div className="flow-container">
          <div className="section-header flow-header">
            <span className="section-label">Assessment Lifecycle</span>
            <h2 className="section-title">Standard Interview Flow</h2>
            <p className="section-subtitle">
              How Quara sequences candidate interactions to deliver rigorous and reliable assessments.
            </p>
          </div>

          <div className="flow-timeline">
            {flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div 
                  className={`flow-node card ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="flow-node-badge">{step.badge}</div>
                  <h3 className="flow-node-title">{step.title}</h3>
                  <p className="flow-node-desc">{step.description}</p>
                </div>
                {idx < flowSteps.length - 1 && (
                  <div className="flow-connector">
                    <ArrowDown className="connector-arrow" size={16} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .capabilities-section {
          background-color: var(--bg-color);
          border-bottom: 1px solid var(--border-color);
          padding: 80px 0;
        }

        .flow-header {
          margin-bottom: 48px;
        }

        .flow-timeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

        .flow-node {
          width: 100%;
          text-align: left;
          padding: 20px 24px;
          cursor: pointer;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: all 0.2s ease;
        }

        .flow-node:hover, .flow-node.active {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-md);
        }

        .flow-node.active {
          background-color: var(--primary-light);
        }

        .flow-node-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 6px;
        }

        .flow-node-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .flow-node-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .flow-connector {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .flow-connector::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background-color: var(--border-color);
          transform: translateX(-50%);
        }

        .connector-arrow {
          color: var(--text-muted);
          background-color: #FFFFFF;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
