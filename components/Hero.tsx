import React from 'react';
import { ChevronRight, Download } from './Icons';
import TerminalDemo from './TerminalDemo';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-300 font-medium tracking-wide uppercase">v0.1.0 Available Now</span>
          </div>
          
          <a 
            href="https://github.com/deepmroot/promptline-rust" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 hover:bg-white/20 transition-colors"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-xs text-gray-300 font-medium tracking-wide uppercase">Open Source</span>
          </a>

          <a 
            href="https://github.com/deepmroot/promptline-rust/blob/master/LICENSE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 hover:bg-white/20 transition-colors"
          >
            <span className="text-xs text-gray-300 font-medium tracking-wide uppercase">MIT License</span>
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Agentic</span> CLI<br />
          for Developers.
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          PromptLine brings ReACT agents to your terminal. 
          Write, refactor, and debug code with an intelligent assistant that understands your entire project context.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-16">
          <a href="#installation" className="flex items-center space-x-2 bg-white text-black px-8 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition-all hover:scale-105">
            <Download size={20} />
            <span>Get Started</span>
          </a>
          <a 
            href="https://github.com/deepmroot/promptline-rust" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-lg font-bold hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Installation snippet */}
        <div className="max-w-lg mx-auto bg-[#161b22] rounded-lg border border-gray-800 p-4 flex items-center justify-between mb-16 group cursor-pointer hover:border-gray-600 transition-colors">
          <code className="text-gray-300 font-mono text-sm">git clone https://github.com/deepmroot/promptline-rust.git</code>
          <a 
            href="https://github.com/deepmroot/promptline-rust" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 group-hover:text-white transition-colors"
          >
            <ChevronRight size={16} />
          </a>
        </div>

        <div id="demo" className="w-full">
          <h3 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-6">Interactive Live Demo</h3>
          <TerminalDemo />
          <p className="mt-4 text-gray-500 text-xs">Powered by Google Gemini 2.5 Flash</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;