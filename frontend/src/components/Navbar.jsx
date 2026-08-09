import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>
          <Sparkles className="logo-icon" size={20} />
          <span>Quara</span>
        </a>
        
        <div className="navbar-links">
          <a href="#how-it-works" className="navbar-link" onClick={() => onNavigate('landing')}>How It Works</a>
          <a href="#features" className="navbar-link" onClick={() => onNavigate('landing')}>Features</a>
          <a href="#capabilities" className="navbar-link" onClick={() => onNavigate('landing')}>Capabilities</a>
          <a href="#demo" className="navbar-link" onClick={() => onNavigate('landing')}>Demo</a>
        </div>

        <div className="navbar-actions">
          <button onClick={() => onNavigate('login')} className="btn-signin">
            Login
          </button>
          <button onClick={() => onNavigate('login')} className="btn btn-primary btn-nav">
            Start Interview
          </button>
        </div>
      </div>
      
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--navbar-height);
          background-color: rgba(248, 246, 242, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-color);
          letter-spacing: -0.03em;
        }

        .logo-icon {
          color: var(--primary-color);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
        }

        .navbar-link:hover {
          color: var(--text-color);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-signin {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-muted);
          background: none;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
        }

        .btn-signin:hover {
          color: var(--text-color);
        }

        .btn-nav {
          padding: 8px 16px;
          font-size: 13.5px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
