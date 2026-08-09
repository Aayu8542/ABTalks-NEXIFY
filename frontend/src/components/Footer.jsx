import React from 'react';
import { Sparkles } from 'lucide-react';

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand Info */}
        <div className="footer-brand">
          <a href="#" className="brand-logo">
            <Sparkles className="logo-icon" size={20} />
            <span>Quara</span>
          </a>
          <p className="brand-desc">
            AI-powered mock interviews and actionable coaching to unlock your engineering potential.
          </p>
          <div className="brand-socials">
            <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon size={18} /></a>
            <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
            <a href="#" className="social-link" aria-label="GitHub"><GithubIcon size={18} /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#capabilities">AI Capabilities</a>
            <a href="#demo">Demo Sandbox</a>
            <a href="#">Pricing</a>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Customers</a>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">DSA Guide</a>
            <a href="#">System Design</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Quara AI. All rights reserved.</p>
        <p className="footer-signature">Designed for technical excellence.</p>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-color);
          border-top: 1px solid var(--border-color);
          padding: 64px 0 32px 0;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-brand {
          max-width: 280px;
          text-align: left;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 16px;
        }

        .logo-icon {
          color: var(--primary-color);
        }

        .brand-desc {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .brand-socials {
          display: flex;
          gap: 12px;
        }

        .social-link {
          color: var(--text-muted);
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          width: 34px;
          height: 34px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-link:hover {
          color: var(--text-color);
          border-color: #D3CDBF;
          transform: translateY(-1px);
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          flex: 1;
          max-width: 720px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }

        .footer-column h4 {
          font-size: 13.5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-color);
          margin-bottom: 8px;
        }

        .footer-column a {
          font-size: 13.5px;
          color: var(--text-muted);
        }

        .footer-column a:hover {
          color: var(--text-color);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
          font-size: 13px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 40px;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
