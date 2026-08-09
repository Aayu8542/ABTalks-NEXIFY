import React from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import InterviewTable from '../components/InterviewTable';
import RecommendationCard from '../components/RecommendationCard';
import PerformanceChart from '../components/PerformanceChart';

export default function Dashboard({ onNavigate }) {
  const recommendations = [
    { title: 'Prompt Engineering', focus: 'Weak Area', improvement: 'Improve score by 8%' },
    { title: 'Vector Databases', focus: 'Weak Area', improvement: 'Improve score by 12%' },
    { title: 'MCP', focus: 'Weak Area', improvement: 'Improve score by 10%' },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar onNavigate={onNavigate} active="dashboard" />
      <main className="dashboard-main">
        <section className="dashboard-top">
          <div className="dashboard-hero card">
            <div>
              <p className="eyebrow">Welcome Back, Aayu</p>
              <h1>Ready for your next AI interview?</h1>
              <p className="hero-copy">Track your performance, review recent interviews, and start a new session in one place.</p>
            </div>
            <div>
              <button className="btn btn-primary btn-start" onClick={() => onNavigate('interview')}>
                Start Interview
              </button>
            </div>
          </div>

          <div className="stats-grid">
            <StatCard title="Overall Score" value="82%" subtitle="Current benchmark" />
            <StatCard title="Interviews Completed" value="12" subtitle="Total sessions" />
            <StatCard title="Topics Covered" value="15" subtitle="Areas practiced" />
          </div>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <div>
              <h2>Recent Interviews</h2>
              <p className="section-copy">Review your latest performance and status updates.</p>
            </div>
            <button className="btn btn-secondary" onClick={() => onNavigate('history')}>
              View all history
            </button>
          </div>
          <InterviewTable />
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <div>
              <h2>Recommended Topics</h2>
              <p className="section-copy">Focus on the areas that will raise your score fastest.</p>
            </div>
            <button className="btn btn-secondary" onClick={() => onNavigate('reports')}>
              View reports
            </button>
          </div>
          <div className="recommendation-grid">
            {recommendations.map((item) => (
              <RecommendationCard
                key={item.title}
                title={item.title}
                focus={item.focus}
                improvement={item.improvement}
              />
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <div>
              <h2>Performance Overview</h2>
              <p className="section-copy">A quick view of your trajectory so far.</p>
            </div>
          </div>
          <PerformanceChart />
        </section>
      </main>
    
      <style>{`
        .dashboard-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          min-height: 100vh;
          gap: 24px;
          padding: 24px;
          background-color: var(--bg-color);
        }

        .dashboard-main {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .dashboard-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .dashboard-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 32px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, #FFF7EF 0%, #F9F1E9 100%);
        }

        .eyebrow {
          margin-bottom: 12px;
          color: var(--primary-color);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .dashboard-hero h1 {
          font-size: 32px;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .hero-copy,
        .section-copy {
          color: var(--text-muted);
          max-width: 560px;
        }

        .btn-start {
          min-width: 180px;
          height: 48px;
          font-size: 15px;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .dashboard-section {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .dashboard-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .recommendation-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        @media (max-width: 1100px) {
          .dashboard-layout {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .dashboard-hero,
          .stats-grid,
          .recommendation-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
