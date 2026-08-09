import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Interview from './pages/Interview';
import History from './pages/History';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [view, setView] = useState('landing');

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onNavigate={setView} />
      ) : view === 'login' ? (
        <LoginPage onNavigate={setView} />
      ) : view === 'signup' ? (
        <SignupPage onNavigate={setView} />
      ) : view === 'dashboard' ? (
        <Dashboard onNavigate={setView} />
      ) : view === 'interview' ? (
        <Interview onNavigate={setView} />
      ) : view === 'history' ? (
        <History onNavigate={setView} />
      ) : view === 'reports' ? (
        <Reports onNavigate={setView} />
      ) : (
        <Settings onNavigate={setView} />
      )}
    </>
  );
}

export default App;
