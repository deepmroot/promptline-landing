import React, { useState, useEffect, useRef } from 'react';
import { MessageType, TerminalLine } from '../types';
import { simulateTerminalCommand } from '../services/geminiService';

const ASCII_LOGO = ` ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄  ▄▄▄▄▄▄▄ ▄     ▄ ▄▄    ▄ ▄▄▄▄▄▄▄ 
█       █   ▄  █ █       █  █▄█  █      ██       █ █   █ █  █  █ █       █
█    ▄▄▄█  █ █ █ █   ▄   █       █  ▄    █▄     ▄█ █   █ █   █▄█ █    ▄▄▄█
█   █▄▄▄█   █▄▄█▄█  █ █  █       █ █ █   █ █   █ █ █   █ █       █   █▄▄▄ 
█    ▄▄▄█    ▄▄  █  █▄█  █       █ █▄█   █ █   █ █ █▄▄▄█ █  ▄    █    ▄▄▄█
█   █   █   █  █ █       █ ██▄██ █       █ █   █ █       █ █ █   █   █▄▄▄ 
█▄▄▄█   █▄▄▄█  █▄█▄▄▄▄▄▄▄█▄█   █▄█▄▄▄▄▄▄██ █▄▄▄█ █▄▄▄▄▄▄▄█▄█  █▄▄█▄▄▄▄▄▄▄█
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
  const renderContent = (content: string, isLogo: boolean = false) => {
    // Special handling for ASCII logo
    if (isLogo) {
      return <div className="text-blue-400 leading-none whitespace-pre select-none mb-2">{content}</div>;
    }

    return content.split('\n').map((line, i) => {
      let className = "text-gray-400";
      if (line.includes('[THOUGHT]')) className = "text-blue-400 italic";
      else if (line.includes('[ACTION]')) className = "text-yellow-400";
      else if (line.includes('[SUCCESS]')) className = "text-green-400 font-bold";
      else if (line.includes('[ERROR]') || line.includes('[FATAL]')) className = "text-red-400";
      else if (line.includes('PromptLine v0.1.0')) className = "text-green-400"; // Highlight version line
      
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
      <div ref={terminalBodyRef} className="p-4 h-[400px] overflow-y-auto custom-scrollbar flex flex-col space-y-1">
        {history.map((line) => (
          <div key={line.id} className="flex flex-col">
            {line.type === MessageType.USER_COMMAND ? (
              <div className="flex items-start text-white mt-2">
                <span className="text-white mr-2">~</span>
                {line.content}
              </div>
            ) : line.id === 'init-logo' ? (
              renderContent(line.content, true)
            ) : (
              <div>
                {renderContent(line.content)}
              </div>
            )}
          </div>
        ))}
        
        {isProcessing && (
           <div className="flex items-center text-gray-500 animate-pulse mt-2">
             <span className="mr-2">●</span> Processing agent loop...
           </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-[#0d1117] p-4 border-t border-gray-800">
        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-white mr-2">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a command to see the agent in action (e.g., "refactor main.rs" or "explain this code")'
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono caret-white"
            autoFocus
            disabled={isProcessing}
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalDemo;