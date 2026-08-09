import React from 'react';
import { BookOpen, Sliders, MessageSquare, Code2, LineChart, FileText } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen size={22} />,
      title: "Curriculum-Based Questions",
      description: "Structured interview pathways covering standard DSA, System Design, Frontend development, and databases."
    },
    {
      icon: <Sliders size={22} />,
      title: "Adaptive Difficulty",
      description: "The AI agent dynamically scales questioning difficulty in response to your accuracy and conceptual depth."
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Multi-turn Conversations",
      description: "Engage in realistic technical discussions with continuous follow-ups that challenge your design decisions."
    },
    {
      icon: <Code2 size={22} />,
      title: "Technical Evaluation",
      description: "Scores your response based on runtime performance, edge cases, semantic accuracy, and design principles."
    },
    {
      icon: <LineChart size={22} />,
      title: "Performance Analytics",
      description: "Review progress over time, comparing confidence ratings, speech clarity, and core technical competencies."
    },
    {
      icon: <FileText size={22} />,
      title: "PDF Feedback Reports",
      description: "Export clean, shareable PDF summaries outlining your strengths, weaknesses, and concrete learning resources."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Designed for Serious Interview Prep</h2>
          <p className="section-subtitle">
            Our AI-powered interview simulator is designed to help you prepare for technical interviews with realistic, adaptive questioning and detailed feedback.
          </p>
        </div>

        <div className="grid-2x3 features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="card feature-card">
              <div className="feat-icon-wrapper">
                {feat.icon}
              </div>
              <h3 className="feat-title">{feat.title}</h3>
              <p className="feat-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
        }

        .features-grid {
          margin-top: 40px;
        }

        .feature-card {
          text-align: left;
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 28px;
          box-shadow: none;
        }

        .feature-card:hover {
          background-color: #FFFFFF;
          border-color: #D3CDBF;
          box-shadow: var(--shadow-md);
        }

        .feat-icon-wrapper {
          color: var(--primary-color);
          background-color: var(--primary-light);
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid var(--border-color);
        }

        .feat-title {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 8px;
        }

        .feat-desc {
          font-size: 14.2px;
          color: var(--text-muted);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
