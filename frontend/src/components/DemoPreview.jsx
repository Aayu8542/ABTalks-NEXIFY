import React, { useState } from 'react';
import { Send, Award, BookOpen, AlertCircle, FileText, CheckCircle, RefreshCw } from 'lucide-react';

export default function DemoPreview() {
  const [answer, setAnswer] = useState(
    "Vector embeddings are numerical representations of words or data items mapped in a high-dimensional space. Words with similar meanings are positioned closer to each other, allowing algorithms to understand semantic context and similarity."
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setAnswer("Vector embeddings are numerical representations of words or data items mapped in a high-dimensional space. Words with similar meanings are positioned closer to each other, allowing algorithms to understand semantic context and similarity.");
  };

  return (
    <section id="demo" className="demo-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Interactive Sandbox</span>
          <h2 className="section-title">See the Agent in Action</h2>
          <p className="section-subtitle">
            Try answering a live technical mock question below and see how the evaluation model computes feedback metrics.
          </p>
        </div>

        <div className="grid-2 demo-grid">
          {/* Left: Answer Entry Box */}
          <div className="demo-editor-card card">
            <div className="editor-header">
              <div className="question-tracker">
                <span className="q-badge">Question 4 of 8</span>
                <span className="topic-pill">Topic: Vector Databases</span>
              </div>
              <div className="editor-status">
                <span className="pulse-dot"></span>
                <span className="status-label">Exam active</span>
              </div>
            </div>

            <div className="question-content">
              <h3>Explain vector embeddings.</h3>
              <p className="question-desc">
                Explain the concept, how they represent relationships, and their application inside vector search engines.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="editor-form">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your response here..."
                disabled={submitted || loading}
                rows={6}
                className="editor-textarea"
              />

              <div className="editor-actions">
                {submitted ? (
                  <button type="button" onClick={handleReset} className="btn btn-secondary btn-reset">
                    <RefreshCw size={14} /> Try Another Answer
                  </button>
                ) : (
                  <button type="submit" disabled={loading} className="btn btn-primary btn-submit">
                    {loading ? (
                      <>
                        <RefreshCw size={14} className="spin-icon" /> Analyzing response...
                      </>
                    ) : (
                      <>
                        Submit Answer <Send size={13} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right: Scores & Dashboard Report Preview */}
          <div className="demo-dashboard-card card">
            {!submitted && !loading ? (
              <div className="dashboard-placeholder">
                <Award size={48} className="placeholder-icon" />
                <h3>Waiting for Submission</h3>
                <p>Submit your response on the left to generate the real-time AI evaluation and competency metrics.</p>
              </div>
            ) : loading ? (
              <div className="dashboard-placeholder loading-placeholder">
                <RefreshCw size={48} className="placeholder-icon spin-icon" />
                <h3>Computing Feedback...</h3>
                <p>Quara models are analyzing semantic accuracy, syntax relevance, and topic depth.</p>
              </div>
            ) : (
              <div className="dashboard-content">
                <div className="dashboard-header">
                  <h3>AI Evaluation Report</h3>
                  <span className="score-pill">Overall Score: 78%</span>
                </div>

                <div className="scores-grid">
                  <div className="score-item">
                    <div className="score-item-header">
                      <span>Technical Knowledge</span>
                      <span className="score-val">78%</span>
                    </div>
                    <div className="score-bar-bg">
                      <div className="score-bar-fill caramel" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  <div className="score-item">
                    <div className="score-item-header">
                      <span>Communication Score</span>
                      <span className="score-val">72%</span>
                    </div>
                    <div className="score-bar-bg">
                      <div className="score-bar-fill brown" style={{ width: '72%' }}></div>
                    </div>
                  </div>

                  <div className="score-item">
                    <div className="score-item-header">
                      <span>Confidence Score</span>
                      <span className="score-val">85%</span>
                    </div>
                    <div className="score-bar-bg">
                      <div className="score-bar-fill green" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="report-details">
                  <div className="report-section weak-areas">
                    <h4 className="section-subheading">
                      <AlertCircle size={15} /> Weak Areas Identified
                    </h4>
                    <ul>
                      <li>Missed mentioning spatial distance metrics (e.g., Cosine similarity, Euclidean distance) used to compute relevance scores.</li>
                      <li>Could elaborate on dimensional reduction or vector quantizations used to optimize indexing performance.</li>
                    </ul>
                  </div>

                  <div className="report-section recommendations">
                    <h4 className="section-subheading">
                      <CheckCircle size={15} /> Actionable Suggestions
                    </h4>
                    <ul>
                      <li>Include vocabulary terms like "Dot Product" or "KNN search" to substantiate your practical systems knowledge.</li>
                      <li>Explain the difference between sparse and dense vectors to demonstrate architectural breadth.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .demo-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
        }

        .demo-grid {
          align-items: stretch;
          margin-top: 40px;
        }

        .demo-editor-card, .demo-dashboard-card {
          min-height: 420px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .editor-header, .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 20px;
        }

        .question-tracker {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .q-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--primary-color);
          background-color: var(--primary-light);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .topic-pill {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .editor-status {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .question-content {
          text-align: left;
          margin-bottom: 20px;
        }

        .question-content h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .question-desc {
          font-size: 13.5px;
          color: var(--text-muted);
        }

        .editor-form {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .editor-textarea {
          flex: 1;
          width: 100%;
          padding: 16px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--text-color);
          background-color: var(--bg-color);
          resize: none;
          outline: none;
          line-height: 1.5;
        }

        .editor-textarea:focus {
          border-color: var(--primary-color);
          background-color: #FFFFFF;
        }

        .editor-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }

        .btn-submit, .btn-reset {
          padding: 10px 20px;
          font-weight: 600;
        }

        /* Right Side Dashboard Preview */
        .dashboard-placeholder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px;
        }

        .placeholder-icon {
          color: #D3CDBF;
          margin-bottom: 16px;
        }

        .dashboard-placeholder h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .dashboard-placeholder p {
          font-size: 13.5px;
          color: var(--text-muted);
          max-width: 280px;
          line-height: 1.5;
        }

        .spin-icon {
          animation: spin 1.2s infinite linear;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .dashboard-content {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dashboard-header h3 {
          font-size: 18px;
          font-weight: 700;
        }

        .score-pill {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-green);
          background-color: var(--accent-green-light);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .scores-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .score-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-color);
          margin-bottom: 6px;
        }

        .score-val {
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .score-bar-bg {
          height: 6px;
          background-color: var(--bg-color);
          border-radius: 3px;
          overflow: hidden;
        }

        .score-bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        .score-bar-fill.caramel { background-color: var(--primary-color); }
        .score-bar-fill.brown { background-color: var(--secondary-color); }
        .score-bar-fill.green { background-color: var(--accent-green); }

        .report-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .report-section {
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
        }

        .section-subheading {
          font-size: 13.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .weak-areas .section-subheading {
          color: #B45309;
        }

        .recommendations .section-subheading {
          color: var(--secondary-color);
        }

        .report-section ul {
          list-style: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .report-section li {
          font-size: 12.5px;
          color: var(--text-muted);
          position: relative;
          padding-left: 12px;
          line-height: 1.45;
        }

        .report-section li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
