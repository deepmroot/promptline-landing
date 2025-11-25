import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import ConfigGenerator from './components/ConfigGenerator';
import Community from './components/Community';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <ConfigGenerator />
        <Community />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;