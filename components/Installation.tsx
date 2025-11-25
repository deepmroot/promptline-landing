import React, { useState } from 'react';
import { Terminal, Check, Copy, Command, Monitor, Download } from './Icons';

type OS = 'unix' | 'windows';

const Installation: React.FC = () => {
  const [activeOS, setActiveOS] = useState<OS>('unix');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CodeBlock = ({ code, id, label }: { code: string, id: string, label: string }) => (
    <div className="mb-6 group">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{label}</span>
        <button 
          onClick={() => handleCopy(code, id)}
          className="flex items-center space-x-1 text-xs text-gray-500 hover:text-white transition-colors"
        >
          {copiedId === id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          <span>{copiedId === id ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4 font-mono text-sm text-gray-300 overflow-x-auto shadow-inner">
        <pre>{code}</pre>
      </div>
    </div>
  );

  return (
    <section id="installation" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16">
          
          {/* Left Side: Context */}
          <div className="md:w-1/3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 mb-6">
              <Download size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Started in Seconds
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              PromptLine is distributed as a single compiled binary with zero runtime dependencies. 
              Install it via your preferred package manager or build from source.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Requires Rust 1.70+ (for source build)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Works on macOS, Linux, and Windows</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>~12MB Binary Size</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Install Guide */}
          <div className="md:w-2/3 bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-800">
              <button 
                onClick={() => setActiveOS('unix')}
                className={`flex-1 py-4 text-sm font-medium flex items-center justify-center space-x-2 transition-colors ${activeOS === 'unix' ? 'bg-[#0d1117] text-white border-t-2 border-blue-500' : 'text-gray-500 hover:text-gray-300 hover:bg-[#1c2128]'}`}
              >
                <Command size={16} />
                <span>macOS / Linux</span>
              </button>
              <button 
                onClick={() => setActiveOS('windows')}
                className={`flex-1 py-4 text-sm font-medium flex items-center justify-center space-x-2 transition-colors ${activeOS === 'windows' ? 'bg-[#0d1117] text-white border-t-2 border-blue-500' : 'text-gray-500 hover:text-gray-300 hover:bg-[#1c2128]'}`}
              >
                <Monitor size={16} />
                <span>Windows</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 bg-[#0d1117]/50">
              {activeOS === 'unix' ? (
                <>
                  <CodeBlock 
                    id="install-clone"
                    label="Option 1: Clone & Build (Recommended)"
                    code={`git clone https://github.com/deepmroot/promptline-rust.git\ncd promptline-rust\ncargo install --path .`}
                  />
                  <CodeBlock 
                    id="install-cargo-unix"
                    label="Option 2: Direct Cargo Install (Coming Soon)"
                    code="cargo install promptline"
                  />
                  <CodeBlock 
                    id="verify-install"
                    label="Verify Installation"
                    code="promptline --version"
                  />
                </>
              ) : (
                <>
                   <CodeBlock 
                    id="install-clone-win"
                    label="Option 1: Clone & Build (Recommended)"
                    code={`git clone https://github.com/deepmroot/promptline-rust.git\ncd promptline-rust\ncargo install --path .`}
                  />
                  <CodeBlock 
                    id="install-cargo-win"
                    label="Option 2: Direct Cargo Install (Coming Soon)"
                    code="cargo install promptline"
                  />
                  <CodeBlock 
                    id="verify-install-win"
                    label="Verify Installation"
                    code="promptline --version"
                  />
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Installation;