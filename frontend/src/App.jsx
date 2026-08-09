import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [view, setView] = useState('landing');

  return (
    <>
      {view === 'landing' ? (
        <LandingPage onNavigate={setView} />
      ) : view === 'login' ? (
        <LoginPage onNavigate={setView} />
      ) : (
        <SignupPage onNavigate={setView} />
      )}
    </>
  );
}

export default App;
