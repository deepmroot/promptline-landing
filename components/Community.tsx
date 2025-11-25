import React from 'react';
import { GitBranch, Users, Heart, MessageCircle } from './Icons';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open Source & Community Driven
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            PromptLine is 100% open source under the MIT license. 
            Join our growing community of developers building the future of AI-powered development tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
              <GitBranch size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">MIT License</h3>
            <p className="text-gray-400 text-sm">Free & Open Forever</p>
          </div>

          <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm">Built by developers, for developers</p>
          </div>

          <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 text-green-400 mb-4">
              <Heart size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Contribute</h3>
            <p className="text-gray-400 text-sm">PRs & Issues Welcome</p>
          </div>

          <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Feedback</h3>
            <p className="text-gray-400 text-sm">Shape the roadmap with us</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#161b22] rounded-xl border border-gray-800 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How to Contribute</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Fork & Clone the Repository</h4>
                  <p className="text-gray-400 text-sm mb-2">Start by forking the repo on GitHub and cloning it locally.</p>
                  <code className="text-xs bg-black/50 text-gray-300 px-3 py-1 rounded border border-gray-800 inline-block">
                    git clone https://github.com/YOUR_USERNAME/promptline-rust.git
                  </code>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Create a Feature Branch</h4>
                  <p className="text-gray-400 text-sm mb-2">Work on your changes in a dedicated branch.</p>
                  <code className="text-xs bg-black/50 text-gray-300 px-3 py-1 rounded border border-gray-800 inline-block">
                    git checkout -b feature/AmazingFeature
                  </code>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Make Your Changes & Test</h4>
                  <p className="text-gray-400 text-sm mb-2">Write clean code, add tests, and ensure everything passes.</p>
                  <code className="text-xs bg-black/50 text-gray-300 px-3 py-1 rounded border border-gray-800 inline-block">
                    cargo test && cargo clippy
                  </code>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Submit a Pull Request</h4>
                  <p className="text-gray-400 text-sm">Push your branch and open a PR with a clear description of your changes.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com/deepmroot/promptline-rust" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                <GitBranch size={18} />
                <span>View on GitHub</span>
              </a>
              <a 
                href="https://github.com/deepmroot/promptline-rust/issues/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                <MessageCircle size={18} />
                <span>Report an Issue</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
