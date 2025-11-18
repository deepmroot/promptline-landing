import React from 'react';
import { ChevronRight, Download, Play } from './Icons';
import TerminalDemo from './TerminalDemo';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-gray-300 font-medium tracking-wide uppercase">v0.1.0 Available Now</span>
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
            <span>Install Cargo Crate</span>
          </a>
          <button className="flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-lg font-bold hover:bg-white/20 transition-all">
             <Play size={20} />
             <span>Watch Video</span>
          </button>
        </div>

        {/* Installation snippet */}
        <div className="max-w-lg mx-auto bg-[#161b22] rounded-lg border border-gray-800 p-4 flex items-center justify-between mb-16 group cursor-pointer hover:border-gray-600 transition-colors">
          <code className="text-gray-300 font-mono text-sm">cargo install promptline</code>
          <ChevronRight className="text-gray-500 group-hover:text-white transition-colors" size={16} />
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