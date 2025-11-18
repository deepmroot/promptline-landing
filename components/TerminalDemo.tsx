import React, { useState, useEffect, useRef } from 'react';
import { MessageType, TerminalLine } from '../types';
import { simulateTerminalCommand } from '../services/geminiService';

const ASCII_LOGO = `
  ____                           _   _     _            
 |  _ \\ _ __ ___  _ __ ___  _ __| |_| |   (_)_ __   ___ 
 | |_) | '__/ _ \\| '_ \` _ \\| '_ \\ __| |   | | '_ \\ / _ \\
 |  __/| | | (_) | | | | | | |_) | |_| |___| | | | |  __/
 |_|   |_|  \\___/|_| |_| |_| .__/ \\__|_____|_|_| |_|\\___|
                           |_|                           
`;

const TerminalDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-logo',
      type: MessageType.SYSTEM_OUTPUT,
      content: ASCII_LOGO,
      timestamp: Date.now()
    },
    {
      id: 'init-1',
      type: MessageType.SYSTEM_OUTPUT,
      content: 'PromptLine v0.1.0 (Rust) - Agentic AI CLI',
      timestamp: Date.now() + 1
    },
    {
      id: 'init-2',
      type: MessageType.SYSTEM_OUTPUT,
      content: 'Type a command to see the agent in action (e.g., "refactor main.rs" or "explain this code")',
      timestamp: Date.now() + 2
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const cmd = input.trim();
    setInput('');
    setIsProcessing(true);

    // Add user command
    const userMsg: TerminalLine = {
      id: Date.now().toString(),
      type: MessageType.USER_COMMAND,
      content: `promptline ${cmd}`,
      timestamp: Date.now()
    };

    setHistory(prev => [...prev, userMsg]);

    // Simulate delay then fetch Gemini response
    try {
      const responseText = await simulateTerminalCommand(cmd);
      
      const systemMsg: TerminalLine = {
        id: (Date.now() + 1).toString(),
        type: MessageType.SYSTEM_OUTPUT,
        content: responseText,
        timestamp: Date.now() + 1
      };

      setHistory(prev => [...prev, systemMsg]);
    } catch (err) {
      const errorMsg: TerminalLine = {
        id: (Date.now() + 1).toString(),
        type: MessageType.ERROR,
        content: '[ERROR] Agent failed to respond.',
        timestamp: Date.now() + 1
      };
      setHistory(prev => [...prev, errorMsg]);
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper to colorize output based on simple heuristics
  const renderContent = (content: string) => {
    // Special handling for the ASCII Logo to ensure it stays blue and bold
    if (content === ASCII_LOGO) {
      return <div className="text-blue-500 font-bold leading-tight whitespace-pre hidden sm:block select-none mb-4">{content}</div>;
    }

    return content.split('\n').map((line, i) => {
      let className = "text-terminal-text";
      if (line.includes('[THOUGHT]')) className = "text-terminal-blue italic";
      else if (line.includes('[ACTION]')) className = "text-terminal-yellow";
      else if (line.includes('[SUCCESS]')) className = "text-terminal-green font-bold";
      else if (line.includes('[ERROR]') || line.includes('[FATAL]')) className = "text-terminal-red";
      else if (line.includes('[INFO]')) className = "text-terminal-dim";
      else if (line.includes('PromptLine v0.1.0')) className = "text-terminal-green font-bold"; // Highlight version line
      
      return <div key={i} className={`${className} whitespace-pre-wrap`}>{line}</div>;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 shadow-2xl rounded-lg overflow-hidden border border-gray-800 bg-[#0d1117] font-mono text-sm sm:text-base">
      {/* Terminal Header */}
      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-gray-400 text-xs">user@promptline-demo:~</div>
        <div className="w-10"></div> 
      </div>

      {/* Terminal Body */}
      <div ref={terminalBodyRef} className="p-4 h-[400px] overflow-y-auto custom-scrollbar flex flex-col space-y-2">
        {history.map((line) => (
          <div key={line.id} className="flex flex-col">
            {line.type === MessageType.USER_COMMAND ? (
              <div className="flex items-center text-white font-bold mt-2">
                <span className="text-terminal-green mr-2">➜</span>
                <span className="text-terminal-blue mr-2">~</span>
                {line.content}
              </div>
            ) : (
              <div className="pl-4 border-l-2 border-gray-800 ml-1 mt-1">
                {renderContent(line.content)}
              </div>
            )}
          </div>
        ))}
        
        {isProcessing && (
           <div className="flex items-center pl-4 text-terminal-dim animate-pulse">
             <span className="mr-2">●</span> Processing agent loop...
           </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-[#0d1117] p-4 border-t border-gray-800">
        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-terminal-green mr-2">➜</span>
          <span className="text-terminal-blue mr-2">~</span>
          <span className="text-white font-bold mr-2">promptline</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Try "analyze current directory" or "write a test for auth"'
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono caret-terminal-green"
            autoFocus
            disabled={isProcessing}
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalDemo;