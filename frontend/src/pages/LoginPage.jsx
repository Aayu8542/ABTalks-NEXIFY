import React, { useState } from 'react';
import { Sparkles, ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Mock Login Successful!');
      onNavigate('landing');
    }, 1000);
  };

  const handleOAuth = (provider) => {
    alert(`Connecting with ${provider}...`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Back Link */}
        <button className="back-btn" onClick={() => onNavigate('landing')}>
          <ArrowLeft size={16} /> Back to Quara
        </button>

        {/* Login Card */}
        <div className="login-card card">
          <div className="login-header">
            <div className="brand-logo">
              <Sparkles className="logo-icon" size={24} />
              <span>Quara</span>
            </div>
            <h2>Welcome back</h2>
            <p>Enter your credentials to access your mock interview reports</p>
          </div>

          {/* Social Auth Providers */}
          <div className="oauth-grid">
            <button className="btn btn-secondary oauth-btn" onClick={() => handleOAuth('Google')}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
              <span>Google</span>
            </button>
            <button className="btn btn-secondary oauth-btn" onClick={() => handleOAuth('GitHub')}>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">or continue with email</span>
            <span className="divider-line"></span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={16} />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link" onClick={(e) => { e.preventDefault(); alert('Reset password email sent!'); }}>
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <Lock className="input-icon" size={16} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkbox-checkmark"></span>
                <span className="checkbox-label">Keep me signed in</span>
              </label>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary btn-submit-login">
              {loading ? 'Signing in...' : 'Sign In with Email'}
            </button>
          </form>

          <div className="login-footer">
            Don't have an account? <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}>Sign up</a>
          </div>
        </div>
      </div>

      <style>{`
        .login-page {
          background-color: var(--bg-color);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }

        .login-container {
          width: 100%;
          max-width: 440px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-muted);
          align-self: flex-start;
          cursor: pointer;
        }

        .back-btn:hover {
          color: var(--text-color);
        }

        .login-card {
          padding: 40px;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-lg);
          text-align: left;
        }

        .login-card:hover {
          transform: none; /* Disable landing page float */
          box-shadow: var(--shadow-lg);
          border-color: var(--border-color);
        }

        .login-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .login-header .brand-logo {
          justify-content: center;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-color);
          letter-spacing: -0.03em;
        }

        .login-header h2 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }

        .login-header p {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .oauth-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .oauth-btn {
          height: 40px;
          font-size: 13.5px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: none;
        }

        .oauth-btn svg {
          flex-shrink: 0;
        }

        .divider {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background-color: var(--border-color);
        }

        .divider-text {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 0 12px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-color);
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-link {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--primary-color);
        }

        .forgot-link:hover {
          color: var(--primary-hover);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--text-muted);
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          height: 40px;
          padding: 0 16px 0 42px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--text-color);
          background-color: var(--bg-color);
          outline: none;
          transition: all 0.15s ease;
        }

        .form-input:focus {
          border-color: var(--primary-color);
          background-color: #FFFFFF;
        }

        .password-toggle {
          position: absolute;
          right: 14px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .password-toggle:hover {
          color: var(--text-color);
        }

        .form-options {
          display: flex;
          align-items: center;
        }

        /* Checkbox styling */
        .checkbox-container {
          display: flex;
          align-items: center;
          position: relative;
          padding-left: 24px;
          cursor: pointer;
          font-size: 13px;
          user-select: none;
        }

        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkbox-checkmark {
          position: absolute;
          left: 0;
          height: 16px;
          width: 16px;
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 3px;
          transition: all 0.15s ease;
        }

        .checkbox-container:hover input ~ .checkbox-checkmark {
          border-color: #D3CDBF;
        }

        .checkbox-container input:checked ~ .checkbox-checkmark {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }

        .checkbox-checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .checkbox-container input:checked ~ .checkbox-checkmark:after {
          display: block;
        }

        .checkbox-container .checkbox-checkmark:after {
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .btn-submit-login {
          height: 42px;
          font-size: 14px;
          font-weight: 600;
        }

        .login-footer {
          text-align: center;
          margin-top: 24px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .signup-link {
          font-weight: 600;
          color: var(--primary-color);
        }

        .signup-link:hover {
          color: var(--primary-hover);
        }
      `}</style>
    </div>
  );
}
