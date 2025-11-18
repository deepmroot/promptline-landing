import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <span className="text-xl font-bold text-white tracking-tight">PromptLine</span>
             <p className="text-gray-500 text-sm mt-2">© 2024 PromptLine Open Source.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Documentation</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">License</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;