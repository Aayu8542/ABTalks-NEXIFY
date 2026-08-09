import React, { useState, useEffect } from 'react';
import { Play, Terminal, ArrowRight, User, Cpu } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [messages, setMessages] = useState([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [state, setState] = useState('initial'); // initial, ai-1, user-1, ai-2, complete

  const fullConversation = [
    {
      sender: 'ai',
      text: 'Explain how RAG reduces hallucinations.',
      delay: 1000
    },
    {
      sender: 'candidate',
      text: 'RAG retrieves external knowledge from verified vector databases and inserts it into the prompt context. This anchors the LLM output in actual source data rather than relying purely on pre-trained parametric memory.',
      delay: 1500
    },
    {
      sender: 'ai',
      text: 'Good answer. How would you improve retrieval quality?',
      delay: 2000
    }
  ];

  useEffect(() => {
    let timer;
    if (state === 'initial') {
      timer = setTimeout(() => {
        setState('ai-1');
        startTyping(0);
      }, 800);
    } else if (state === 'user-1-trigger') {
      timer = setTimeout(() => {
        setState('user-1');
        startTyping(1);
      }, 1000);
    } else if (state === 'ai-2-trigger') {
      timer = setTimeout(() => {
        setState('ai-2');
        startTyping(2);
      }, 1200);
    } else if (state === 'loop-restart') {
      timer = setTimeout(() => {
        setMessages([]);
        setState('initial');
      }, 5000); // Wait 5 seconds before restarting simulation loop
    }
    return () => clearTimeout(timer);
  }, [state]);

  const startTyping = (index) => {
    setTypingIndex(index);
    setTypingText('');
    const fullText = fullConversation[index].text;
    let currentLength = 0;
    
    // Fast typing effect for candidate, normal for AI
    const speed = fullConversation[index].sender === 'candidate' ? 18 : 30;

    const interval = setInterval(() => {
      if (currentLength < fullText.length) {
        currentLength++;
        setTypingText(fullText.substring(0, currentLength));
      } else {
        clearInterval(interval);
        // Message finished typing, add to transcript list
        setMessages(prev => [...prev, {
          sender: fullConversation[index].sender,
          text: fullText
        }]);
        setTypingText('');
        
        // Trigger next state
        if (index === 0) {
          setState('user-1-trigger');
        } else if (index === 1) {
          setState('ai-2-trigger');
        } else if (index === 2) {
          setState('loop-restart');
        }
      }
    }, speed);
  };

  return (
    <section className="hero-section">
      <div className="container hero-container grid-2">
        {/* Left Column: Copywriting & Actions */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="pulse-dot"></span>
            <span>Live Technical Assessment Agent v1.4</span>
          </div>
          <h1 className="hero-title">
            Master Technical Interviews <br />
            <span className="text-gradient">with AI-Powered Assessment</span>
          </h1>
          <p className="hero-subtitle">
            Personalized technical interviews based on your learning journey, adaptive follow-up questions, and actionable feedback.
          </p>
          <div className="hero-actions">
            <button onClick={() => onNavigate('login')} className="btn btn-primary btn-hero-lg">
              Start Interview <ArrowRight size={16} />
            </button>
            <a href="#demo" className="btn btn-secondary btn-hero-lg">
              <Play size={15} fill="currentColor" /> Watch Demo
            </a>
          </div>
          
          <div className="hero-meta">
            <span className="meta-item">•No setup required</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">•Adaptive difficulty</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">•Feedback in 30s</span>
          </div>
        </div>

        {/* Right Column: Interactive Mock Interview UI */}
        <div className="hero-visual">
          <div className="mock-window">
            <div className="mock-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">Quara Agent Simulator</div>
              <div className="window-status">
                <span className="pulse-dot"></span>
                <span className="status-label">Recording Live</span>
              </div>
            </div>

            <div className="mock-body">
              <div className="avatar-header">
                <div className="ai-avatar">
                  <Cpu size={18} />
                </div>
                <div className="avatar-details">
                  <div className="avatar-name">AI Interviewer</div>
                  <div className="avatar-meta">Senior Engineer Agent</div>
                </div>
                <div className="waveform">
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                </div>
              </div>

              <div className="transcript-box">
                {/* Render fully typed messages */}
                {messages.map((msg, i) => (
                  <div key={i} className={`chat-bubble ${msg.sender}`}>
                    <div className="chat-avatar">
                      {msg.sender === 'ai' ? <Cpu size={14} /> : <User size={14} />}
                    </div>
                    <div className="chat-text">
                      {msg.text.includes('Good answer.') ? (
                        <>
                          <span className="highlight-success">Good answer.</span>{' '}
                          {msg.text.replace('Good answer.', '')}
                        </>
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                ))}

                {/* Render active typing text */}
                {typingText && (
                  <div className={`chat-bubble ${fullConversation[typingIndex].sender}`}>
                    <div className="chat-avatar">
                      {fullConversation[typingIndex].sender === 'ai' ? <Cpu size={14} /> : <User size={14} />}
                    </div>
                    <div className="chat-text">
                      {typingText}
                      <span className="typing-cursor"></span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="interview-footer-metrics">
                <div className="metric-pill">
                  <span className="pill-dot green"></span>
                  <span>Topic: System Design & RAG</span>
                </div>
                <div className="metric-pill">
                  <span className="pill-dot amber"></span>
                  <span>Question: 4 of 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: var(--bg-color);
          padding: 100px 0 80px 0;
          overflow: hidden;
        }

        .hero-container {
          align-items: center;
        }

        .hero-content {
          text-align: left;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-color);
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
        }

        .hero-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .text-gradient {
          color: var(--primary-color);
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 19px;
          color: var(--text-muted);
          margin-bottom: 36px;
          max-width: 520px;
          line-height: 1.55;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-hero-lg {
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 600;
          border-radius: var(--radius-sm);
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13.5px;
          color: var(--text-muted);
        }

        .meta-separator {
          color: var(--border-color);
        }

        /* Right Side: Mock UI */
        .mock-window {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
        }

        .mock-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          border-bottom: 1px solid var(--border-color);
          background-color: #FAF9F6;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .dot-red { background-color: #EF4444; }
        .dot-yellow { background-color: #F59E0B; }
        .dot-green { background-color: #10B981; }

        .window-title {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .window-status {
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

        .mock-body {
          padding: 24px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          background-color: #FFFFFF;
        }

        .avatar-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          margin-bottom: 20px;
        }

        .ai-avatar {
          background-color: var(--primary-light);
          color: var(--primary-color);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .avatar-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-color);
        }

        .avatar-meta {
          font-size: 12px;
          color: var(--text-muted);
        }

        .transcript-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
          text-align: left;
        }

        .chat-bubble {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          border: 1px solid var(--border-color);
        }

        .ai.chat-bubble .chat-avatar {
          background-color: var(--primary-light);
          color: var(--primary-color);
        }

        .candidate.chat-bubble .chat-avatar {
          background-color: #F3F4F6;
          color: var(--text-color);
        }

        .chat-text {
          font-size: 13.5px;
          color: var(--text-color);
          background-color: var(--bg-color);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          max-width: 90%;
          white-space: pre-wrap;
          font-family: var(--font-sans);
        }

        .candidate.chat-bubble .chat-text {
          background-color: #FFFFFF;
        }

        .highlight-success {
          color: var(--accent-green);
          font-weight: 600;
          display: inline-block;
          background-color: var(--accent-green-light);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .interview-footer-metrics {
          display: flex;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }

        .metric-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .pill-dot.green { background-color: var(--accent-green); }
        .pill-dot.amber { background-color: #F59E0B; }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 40px;
          }
          .hero-content {
            text-align: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-meta {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 12px;
          }
          .hero-meta {
            flex-wrap: wrap;
            justify-content: center;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
