import React, { useState } from 'react';
import { Menu, X, Github, Terminal } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black p-1 rounded">
             <Terminal size={20} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">PromptLine</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#installation" className="text-sm text-gray-400 hover:text-white transition-colors">Install</a>
          <a href="#demo" className="text-sm text-gray-400 hover:text-white transition-colors">Demo</a>
          <a href="#community" className="text-sm text-gray-400 hover:text-white transition-colors">Community</a>
          <a href="#roadmap" className="text-sm text-gray-400 hover:text-white transition-colors">Roadmap</a>
          <a 
            href="https://github.com/deepmroot/promptline-rust" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <Github size={16} />
            <span>Star on GitHub</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#features" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#installation" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Install</a>
            <a href="#demo" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Demo</a>
            <a href="#community" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Community</a>
            <a href="#roadmap" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Roadmap</a>
             <a href="https://github.com/deepmroot/promptline-rust" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white font-medium" onClick={() => setIsOpen(false)}>
                <Github size={16} />
                <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;