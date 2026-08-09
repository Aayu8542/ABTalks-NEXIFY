import React, { useState } from 'react';
import { Sparkles, ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignupPage({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Mock signup successful!');
      onNavigate('login');
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <button className="back-btn" onClick={() => onNavigate('login')}>
          <ArrowLeft size={16} /> Back to Sign In
        </button>

        <div className="login-card card">
          <div className="login-header">
            <div className="brand-logo">
              <Sparkles className="logo-icon" size={24} />
              <span>Quara</span>
            </div>
            <h2>Start your free trial</h2>
            <p>Join Quara and get mock interview reports instantly.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

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
              <label htmlFor="password">Password</label>
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

            <button type="submit" disabled={loading} className="btn btn-primary btn-submit-login">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="login-footer">
            Already have an account?{' '}
            <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>
              Sign in
            </a>
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
