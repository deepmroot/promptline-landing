import React, { useState } from 'react';
import { Cpu, GitBranch, ShieldCheck, Terminal, Zap, Search, X, ChevronRight } from './Icons';

const features = [
  {
    title: "ReACT Agent Loop",
    desc: "Implements advanced Think → Act → Observe patterns for multi-step complex reasoning and execution.",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    detail: "PromptLine doesn't just execute one-off prompts. It uses the ReACT pattern to decompose complex problems. It formulates a plan (Thought), executes a tool like 'file_read' or 'shell_exec' (Action), and analyzes the output (Observation) before proceeding to the next step.",
    code: `[THOUGHT] User wants to find unused imports in main.rs
[ACTION] shell_exec "cargo check"
[OBSERVATION] warning: unused import: \`std::io\`
[THOUGHT] I need to remove the unused import line.
[ACTION] file_edit main.rs`
  },
  {
    title: "Multi-Model Support",
    desc: "Seamlessly switch between OpenAI and local LLMs via Ollama.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    detail: "Avoid vendor lock-in. PromptLine supports OpenAI for powerful cloud-based reasoning and Ollama for running local models like Llama 3 on your machine. Perfect for sensitive, private codebases without changing your workflow.",
    code: `// config.yaml
models:
  default: "ollama/llama3"
  fallback: "gpt-4-turbo"
  
// Switch on the fly
$ promptline --model gpt-4 "Explain this complex architecture"`
  },
  {
    title: "Safety First",
    desc: "Built-in dry-run modes, command filtering, and diff previews before any file modifications.",
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    detail: "We treat your filesystem as sacred. All file mutations and shell commands are intercepted by a safety layer. You see a unified diff of proposed changes and must explicitly approve them unless configured otherwise.",
    code: `[SAFETY] Agent wants to run: "rm -rf ./temp"
[?] Allow this action? (y/N/always): n
[BLOCK] Action denied by user.
[AGENT] Understood. I will attempt to clean up using specific file paths instead.`
  },
  {
    title: "Native Performance",
    desc: "Built in Rust for blazing fast execution as a single compiled binary with minimal dependencies.",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    detail: "Written in 100% safe Rust. Startup time is <50ms. Memory footprint is minimal compared to Python/Node-based agents. Distributed as a single static binary that works on Linux, macOS, and Windows.",
    code: `$ time promptline --version
PromptLine v0.1.0
0.00s user 0.00s system 85% cpu 0.004 total`
  },
  {
    title: "Context Aware",
    desc: "Intelligent context management that understands your entire project structure and conversation history.",
    icon: <Search className="w-6 h-6 text-blue-400" />,
    detail: "PromptLine maintains a rolling window of conversation history and intelligently indexes your codebase. It knows about your 'Cargo.toml', your git status, and recent errors, injecting relevant context automatically.",
    code: `[CONTEXT] Auto-injecting: src/lib.rs (Active File)
[CONTEXT] Auto-injecting: Last compilation error
[PROMPT] "Fix the type mismatch error"
-> Agent now has full visibility into the specific error and file content.`
  },
  {
    title: "Extensible Tools",
    desc: "Plugin architecture supporting custom tools for file operations, git integration, and web search.",
    icon: <GitBranch className="w-6 h-6 text-purple-400" />,
    detail: "Extend the agent's capabilities with a simple JSON-RPC interface. Write tools in any language (Python, Bash, Go) and register them in your config. The agent learns to use them immediately.",
    code: `// tools/weather.json
{
  "name": "get_weather",
  "description": "Get current weather for a city",
  "path": "./scripts/weather.sh"
}`
  }
];

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Power Users</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    PromptLine isn't just a wrapper. It's a fully autonomous agent embedded in your terminal.
                    <br/><span className="text-sm text-gray-500 mt-2 inline-block">(Click a card to see under the hood)</span>
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((f, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedFeature(idx)}
                      className="group text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                        <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                          {f.title}
                          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500" />
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </button>
                ))}
            </div>
        </div>

        {/* Feature Modal */}
        {selectedFeature !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedFeature(null)}
            ></div>
            
            <div className="relative bg-[#0d1117] border border-gray-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      {features[selectedFeature].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{features[selectedFeature].title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">How it works</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {features[selectedFeature].detail}
                  </p>
                </div>

                <div>
                   <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold flex items-center gap-2">
                     <Terminal size={14} /> Under the Hood
                   </h4>
                   <div className="bg-[#161b22] rounded-lg border border-gray-800 p-4 overflow-x-auto">
                     <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
                       {features[selectedFeature].code}
                     </pre>
                   </div>
                </div>
              </div>
              
              <div className="bg-[#161b22] px-8 py-4 border-t border-gray-800 flex justify-end">
                <button 
                   onClick={() => setSelectedFeature(null)}
                   className="text-sm text-gray-400 hover:text-white font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default Features;