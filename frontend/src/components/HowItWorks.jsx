import React from 'react';
import { UserCheck, Mic, FileBarChart2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserCheck size={28} />,
      stepNum: "Step 01",
      title: "Analyze Candidate Profile",
      description: "Upload your resume or enter your target job description. The AI parses your technical background, skills, and projects to align questions directly with your domain."
    },
    {
      icon: <Mic size={28} />,
      stepNum: "Step 02",
      title: "Conduct Technical Interview",
      description: "Engage in an adaptive multi-turn voice or chat conversation. The AI dynamically adjusts difficulty based on your answers and poses relevant follow-up questions."
    },
    {
      icon: <FileBarChart2 size={28} />,
      stepNum: "Step 03",
      title: "Generate Feedback Report",
      description: "Receive a comprehensive scorecard detailing your technical correctness, communication score, weak areas, and actionable improvement recommendations."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Workflow</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A three-step continuous evaluation process to pinpoint knowledge gaps and accelerate your interview prep.
          </p>
        </div>

        <div className="grid-3 steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="card step-card">
              <div className="step-badge">{step.stepNum}</div>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: var(--bg-color);
          border-bottom: 1px solid var(--border-color);
        }

        .steps-grid {
          margin-top: 40px;
        }

        .step-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .step-badge {
          position: absolute;
          top: 24px;
          right: 28px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .step-icon-wrapper {
          color: var(--primary-color);
          background-color: var(--primary-light);
          width: 56px;
          height: 56px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid var(--border-color);
        }

        .step-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 12px;
        }

        .step-desc {
          font-size: 14.5px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .step-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
