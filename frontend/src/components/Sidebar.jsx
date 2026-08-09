import React from 'react';
import { LayoutDashboard, Play, Clock3, FileText, Settings2 } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', view: 'dashboard', icon: LayoutDashboard },
  { label: 'Start Interview', view: 'interview', icon: Play },
  { label: 'Interview History', view: 'history', icon: Clock3 },
  { label: 'Reports', view: 'reports', icon: FileText },
  { label: 'Settings', view: 'settings', icon: Settings2 },
];

export default function Sidebar({ onNavigate, active }) {
  return (
    <aside className="sidebar card">
      <div className="sidebar-brand">
        <div className="sidebar-logo">Q</div>
        <div>
          <p className="sidebar-title">Quara</p>
          <p className="sidebar-copy">Interview prep hub</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.view}
              type="button"
              className={`sidebar-item ${active === item.view ? 'active' : ''}`}
              onClick={() => onNavigate(item.view)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <style>{`
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 32px;
          min-height: calc(100vh - 48px);
          padding: 28px;
          border-radius: var(--radius-lg);
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sidebar-logo {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background-color: var(--primary-color);
          color: white;
          font-weight: 700;
          font-size: 20px;
        }

        .sidebar-title {
          font-size: 16px;
          font-weight: 700;
        }

        .sidebar-copy {
          color: var(--text-muted);
          font-size: 13px;
        }

        .sidebar-nav {
          display: grid;
          gap: 10px;
        }

        .sidebar-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          color: var(--text-color);
          background-color: transparent;
          font-weight: 600;
          transition: background-color 0.2s ease, color 0.2s ease;
          text-align: left;
        }

        .sidebar-item:hover,
        .sidebar-item.active {
          background-color: var(--primary-light);
          color: var(--primary-color);
        }
      `}</style>
    </aside>
  );
}
