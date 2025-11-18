import React from 'react';

const phases = [
  {
    phase: "Phase 1 - MVP",
    status: "Current",
    items: [
      "Core ReACT agent loop",
      "OpenAI integration",
      "Basic shell & file tools",
      "Safety layer approvals"
    ],
    color: "border-green-500"
  },
  {
    phase: "Phase 2 - Expansion",
    status: "Next",
    items: [
      "Context memory",
      "Local LLM (llama.cpp)",
      "Interactive REPL mode",
      "Web request tools"
    ],
    color: "border-blue-500"
  },
  {
    phase: "Phase 3 - Hardening",
    status: "Planned",
    items: [
      "Command sandboxing",
      "Performance tuning",
      "Comprehensive testing",
      "Security audit"
    ],
    color: "border-purple-500"
  },
  {
    phase: "Phase 4 - Full Product",
    status: "Future",
    items: [
      "Plugin system",
      "Multi-agent coordination",
      "IDE Integrations",
      "Cloud Sync"
    ],
    color: "border-gray-600"
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Development Roadmap</h2>
          <p className="text-gray-400">Our path to revolutionizing the CLI experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <div key={i} className={`border-t-4 ${p.color} bg-gray-900/50 p-6 pt-8 rounded-b-lg`}>
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-bold text-white">{p.phase}</h3>
                 <span className="text-xs uppercase tracking-wider text-gray-500 border border-gray-700 px-2 py-1 rounded">{p.status}</span>
               </div>
               <ul className="space-y-3">
                 {p.items.map((item, idx) => (
                   <li key={idx} className="text-gray-400 text-sm flex items-start">
                     <span className="mr-2 text-gray-600">•</span>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;