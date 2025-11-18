# PromptLine Landing Page 🚀

<div align="center">

![PromptLine Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

**An interactive landing page for PromptLine - The Agentic CLI for Developers**

[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 About The Project

This is a modern, interactive landing page for **PromptLine** - a high-performance Rust-based CLI tool that brings ReACT agents to your terminal. The landing page features a live AI-powered terminal demo, comprehensive feature showcase, interactive configuration generator, and a product roadmap.

### ✨ Key Features

- 🎨 **Modern UI/UX** - Sleek dark theme with gradient accents and smooth animations
- 💻 **Live Terminal Demo** - Interactive CLI simulation powered by Google Gemini 2.5 Flash
- 🔧 **Config Generator** - Interactive YAML configuration builder for PromptLine
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎯 **TypeScript** - Fully typed for better developer experience and reliability

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 6.4** - Next-generation frontend tooling

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework (configured inline)
- **Lucide React** - Beautiful, consistent icons
- **Custom CSS** - Custom scrollbar and terminal styling

### AI Integration
- **Google Generative AI SDK** - Integration with Gemini 2.5 Flash model
- Real-time response streaming and simulation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Google Gemini API Key** ([Get one here](https://ai.google.dev/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/promptline-landing.git
   cd promptline-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create or update `.env.local` in the root directory:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
promptLine_landingPage/
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── TerminalDemo.tsx    # Interactive AI terminal
│   ├── Features.tsx        # Feature showcase grid
│   ├── Installation.tsx    # Installation instructions
│   ├── ConfigGenerator.tsx # YAML config builder
│   ├── Roadmap.tsx         # Product roadmap
│   ├── Footer.tsx          # Footer with links
│   └── Icons.tsx           # Icon components
├── services/
│   └── geminiService.ts    # Gemini AI integration
├── App.tsx                 # Main app component
├── index.tsx               # Entry point
├── types.ts                # TypeScript type definitions
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── .env.local              # Environment variables (not committed)
```

---

## 🎯 Component Overview

### TerminalDemo
Interactive terminal simulation that sends user commands to Google Gemini and displays agent-style responses with syntax highlighting.

**Features:**
- Real-time AI responses
- Syntax-highlighted output ([THOUGHT], [ACTION], [SUCCESS], etc.)
- Smooth auto-scroll within terminal container
- Command history management
- Loading states and error handling

### ConfigGenerator
Interactive YAML configuration builder with:
- Model provider selection (OpenAI, Anthropic, Ollama, Local)
- Safety level toggles
- Custom tool configuration
- Export to YAML functionality
- Syntax-highlighted preview

### Features
Showcases 6 core features with modal details:
1. ReACT Agent Loop
2. Multi-Model Support
3. Safety First
4. Native Performance
5. Context Aware
6. Extensible Tools

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_KEY` | Google Gemini API key for terminal demo | Yes |

> ⚠️ **Security Note**: Never commit your `.env.local` file. The API key should remain private.

---

## 🎨 Customization

### Colors & Theme

The project uses Tailwind CSS with custom color extensions defined inline. Key colors:

```css
terminal-green: #27c93f
terminal-blue: #58a6ff
terminal-yellow: #f0ad4e
terminal-red: #ff5f56
terminal-dim: #6e7681
```

### Styling

All styles use Tailwind utility classes. Custom styles are in:
- `index.tsx` - Global styles including terminal scrollbar
- Component files - Component-specific styling

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Development Notes

### Known Issues
- Gemini API requires proper error handling for rate limits
- Large terminal history may impact performance

### Future Enhancements
- [ ] Add video demo modal
- [ ] Implement theme switcher
- [ ] Add more code examples
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] A11y improvements

---

## 📜 License

This project is part of the PromptLine ecosystem. See the main repository for license information.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing fast build tool
- **Google** - For the Gemini AI API
- **Lucide** - For beautiful icons
- **Tailwind CSS** - For utility-first CSS

---

## 📬 Contact & Links

- **Website**: [PromptLine Official](#)
- **AI Studio App**: [View on AI Studio](https://ai.studio/apps/drive/1Xdr8vzNw1nboC0uPOwJ9mg0MU4QRB_7E)
- **Issues**: [GitHub Issues](#)
- **Discussions**: [GitHub Discussions](#)

---

<div align="center">

**Built with ❤️ by the PromptLine Team**

⭐ Star this repo if you find it useful!

</div>
