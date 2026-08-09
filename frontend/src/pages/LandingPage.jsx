import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Capabilities from '../components/Capabilities';
import DemoPreview from '../components/DemoPreview';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page-wrapper">
      <Navbar onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        <HowItWorks />
        <Features />
        <Capabilities />
        <DemoPreview />
        <CTA onNavigate={onNavigate} />
      </main>
      <Footer />
      
      <style>{`
        .landing-page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          background-color: var(--bg-color);
        }
        main {
          flex: 1;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
