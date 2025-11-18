import React, { useState, useEffect } from 'react';
import { Settings, ShieldCheck, Cpu, Download, Zap, Monitor, Lock, Copy, Check } from './Icons';

const ConfigGenerator: React.FC = () => {
  const [model, setModel] = useState('gpt-4');
  const [fileRead, setFileRead] = useState('allow');
  const [fileWrite, setFileWrite] = useState('ask');
  const [shellExec, setShellExec] = useState('ask');
  const [requireApproval, setRequireApproval] = useState(true);
  const [yamlOutput, setYamlOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const cloudModels = [
    { id: 'gpt-4', label: 'GPT-4', desc: 'Best for reasoning' },
    { id: 'claude-3-opus', label: 'Claude 3 Opus', desc: 'Huge context window' },
    { id: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro', desc: 'Multimodal expert' },
    { id: 'gpt-4-turbo', label: 'GPT-4 Turbo', desc: 'Fast & efficient' },
  ];

  const localModels = [
    { id: 'ollama/llama3', label: 'Llama 3', desc: 'Local powerhouse' },
    { id: 'ollama/mistral', label: 'Mistral', desc: 'Lightweight & fast' },
    { id: 'ollama/codellama', label: 'CodeLlama', desc: 'Code specialist' },
    { id: 'local-ai', label: 'LocalAI', desc: 'Generic OpenAI API' },
  ];

  useEffect(() => {
    const isLocal = model.startsWith('ollama') || model === 'local-ai';
    
    let providerConfig = `  providers:
    openai:
      api_key: "\${OPENAI_API_KEY}"
    anthropic:
      api_key: "\${ANTHROPIC_API_KEY}"`;

    if (isLocal) {
      providerConfig += `
    # Local Inference Configuration
    ollama:
      api_base: "http://localhost:11434"
      model: "${model.replace('ollama/', '')}"`;
    }

    const yaml = `models:
  default: "${model}"
${providerConfig}

tools:
  file_read: ${fileRead}
  file_write: ${fileWrite}
  shell_execute: ${shellExec}

safety:
  require_approval: ${requireApproval}
  dangerous_commands: 
    - "rm -rf"
    - "mkfs"
    - "dd"
    - ":(){ :|:& };:"`;
    setYamlOutput(yaml);
  }, [model, fileRead, fileWrite, shellExec, requireApproval]);

  const handleDownload = () => {
    const blob = new Blob([yamlOutput], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.yaml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(yamlOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SegmentedControl = ({ 
    options, 
    value, 
    onChange, 
    colors 
  }: { 
    options: { value: string, label: string }[], 
    value: string, 
    onChange: (v: string) => void,
    colors: Record<string, string>
  }) => {
    return (
      <div className="flex bg-black/40 p-1 rounded-lg border border-gray-700/50">
        {options.map((opt) => {
          const isActive = value === opt.value;
          // Dynamic color class generation based on active state
          let activeClass = "bg-gray-700 text-white";
          if (isActive && colors[opt.value] === 'red') activeClass = "bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]";
          if (isActive && colors[opt.value] === 'yellow') activeClass = "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.2)]";
          if (isActive && colors[opt.value] === 'green') activeClass = "bg-green-500/20 text-green-400 border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.2)]";
          if (isActive && colors[opt.value] === 'blue') activeClass = "bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]";

          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                isActive ? activeClass : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mt-40 -mr-40 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
               <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 rounded-xl border border-white/10">
                 <Settings className="text-purple-400" size={24} />
               </div>
               <h2 className="text-3xl font-bold text-white">Config Generator</h2>
            </div>
            <p className="text-gray-400 max-w-2xl text-lg">
              Design your agent's personality and security protocols.
            </p>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={handleDownload}
              className="group flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download YAML</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* AI Model Selection */}
            <div className="bg-[#0d1117] rounded-2xl border border-gray-800 p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center space-x-2 mb-6 text-white relative">
                <Cpu size={20} className="text-blue-400" />
                <h3 className="font-bold text-lg">Model Architecture</h3>
              </div>
              
              <div className="space-y-6 relative">
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Zap size={12} /> Cloud Providers
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {cloudModels.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setModel(m.id)}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 ${
                          model === m.id 
                            ? 'bg-blue-600/20 border-blue-500/50 text-white shadow-lg shadow-blue-900/20' 
                            : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:border-white/10'
                        }`}
                      >
                        <span className="font-semibold text-sm">{m.label}</span>
                        <span className="text-[10px] opacity-60">{m.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Monitor size={12} /> Local Inference
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {localModels.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setModel(m.id)}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 ${
                          model === m.id 
                            ? 'bg-purple-600/20 border-purple-500/50 text-white shadow-lg shadow-purple-900/20' 
                            : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:border-white/10'
                        }`}
                      >
                         <span className="font-semibold text-sm">{m.label}</span>
                         <span className="text-[10px] opacity-60">{m.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Permissions */}
            <div className="bg-[#0d1117] rounded-2xl border border-gray-800 p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center space-x-2 mb-6 text-white relative">
                <ShieldCheck size={20} className="text-green-400" />
                <h3 className="font-bold text-lg">Security Protocol</h3>
              </div>
              
              <div className="space-y-5 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-300 text-sm font-medium">File System Write</div>
                    <div className="text-gray-600 text-xs">Create/Edit/Delete files</div>
                  </div>
                  <div className="w-40">
                    <SegmentedControl 
                      value={fileWrite} 
                      onChange={setFileWrite}
                      options={[
                        { value: 'allow', label: 'Allow' },
                        { value: 'ask', label: 'Ask' },
                        { value: 'deny', label: 'Deny' }
                      ]}
                      colors={{ allow: 'red', ask: 'yellow', deny: 'green' }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                   <div>
                    <div className="text-gray-300 text-sm font-medium">Shell Execution</div>
                    <div className="text-gray-600 text-xs">Run terminal commands</div>
                  </div>
                  <div className="w-40">
                    <SegmentedControl 
                      value={shellExec} 
                      onChange={setShellExec}
                      options={[
                        { value: 'allow', label: 'Allow' },
                        { value: 'ask', label: 'Ask' },
                        { value: 'deny', label: 'Deny' }
                      ]}
                      colors={{ allow: 'red', ask: 'yellow', deny: 'green' }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                   <div>
                    <div className="text-gray-300 text-sm font-medium">File System Read</div>
                    <div className="text-gray-600 text-xs">Analyze code files</div>
                  </div>
                  <div className="w-40">
                     <SegmentedControl 
                      value={fileRead} 
                      onChange={setFileRead}
                      options={[
                        { value: 'allow', label: 'Allow' },
                        { value: 'ask', label: 'Ask' },
                      ]}
                      colors={{ allow: 'blue', ask: 'yellow' }}
                    />
                  </div>
                </div>
              </div>
            </div>

             {/* Safety Mode */}
             <div className="bg-[#0d1117] rounded-2xl border border-gray-800 p-6 shadow-xl backdrop-blur-sm flex items-center justify-between group cursor-pointer" onClick={() => setRequireApproval(!requireApproval)}>
                <div className="flex items-center space-x-4 text-white">
                  <div className="bg-orange-500/10 p-2 rounded-lg border border-orange-500/20">
                    <Lock size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Safety Interlock</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Require explicit 'Y' confirmation for all actions</p>
                  </div>
                </div>
                <div className={`w-14 h-7 rounded-full transition-colors relative duration-300 ${requireApproval ? 'bg-green-500' : 'bg-gray-700'}`}>
                  <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md ${requireApproval ? 'translate-x-7' : 'translate-x-0'}`} />
                </div>
            </div>

          </div>

          {/* Preview Column */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="bg-[#0d1117] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col h-full min-h-[600px] relative">
              {/* Window Header */}
              <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex items-center space-x-2 opacity-50">
                  <div className="text-xs text-gray-400 font-mono">vim ~/.promptline/config.yaml</div>
                </div>
                <button 
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded border border-white/5 hover:border-white/20"
                >
                  {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              
              {/* Code Content */}
              <div className="p-6 flex-1 overflow-auto custom-scrollbar bg-[#0d1117] text-sm font-mono relative">
                {/* Line Numbers */}
                <div className="absolute left-4 top-6 text-gray-700 select-none text-right font-mono text-xs leading-relaxed">
                  {yamlOutput.split('\n').map((_, i) => <div key={i}>{i + 1}</div>)}
                </div>

                <pre className="pl-8 leading-relaxed">
                  {yamlOutput.split('\n').map((line, i) => {
                    if (line.trim().startsWith('#')) return <div key={i} className="text-gray-500 italic">{line}</div>;
                    
                    if (line.includes(':')) {
                      const parts = line.split(':');
                      const key = parts[0];
                      const val = parts.slice(1).join(':');
                      
                      return (
                        <div key={i}>
                          <span className="text-blue-400">{key}</span>
                          <span className="text-gray-500">:</span>
                          {val && (
                             <span className={
                               val.includes('true') || val.includes('false') ? 'text-purple-400' :
                               val.includes('"') ? 'text-green-400' :
                               val.includes('[') ? 'text-yellow-400' :
                               'text-orange-300'
                             }>{val}</span>
                          )}
                        </div>
                      );
                    }
                    
                    // Array items
                    if (line.trim().startsWith('-')) {
                       return (
                        <div key={i}>
                          <span className="text-gray-500">- </span>
                          <span className="text-green-400">{line.replace('-', '')}</span>
                        </div>
                       )
                    }

                    return <div key={i} className="text-gray-300">{line}</div>;
                  })}
                </pre>
              </div>
              
              {/* Mobile Only Download Button */}
              <div className="md:hidden p-4 border-t border-gray-800 bg-[#161b22]">
                 <button 
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-black px-4 py-3 rounded-lg font-bold"
                >
                  <Download size={18} />
                  <span>Download YAML</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConfigGenerator;