import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
// Note: In a real production app, you might want to proxy this through a backend 
// to keep the key secure, but for this demo context, we use the env var.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const simulateTerminalCommand = async (command: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: No API Key configured. The terminal simulation requires a Gemini API Key.";
  }

  const systemInstruction = `
    You are PromptLine, a high-performance Rust-based CLI tool for intelligent code assistance.
    
    Your persona:
    - You are helpful, technical, and concise.
    - You use the ReACT pattern (Thought -> Act -> Observe).
    - You are currently running in a simulated "demo" web environment.
    
    Task:
    The user will type a command. You must simulate the CLI output for that command.
    
    Format your response as a raw text log that would appear in a terminal. 
    Include styles like [INFO], [THOUGHT], [ACTION], [SUCCESS] prefixes.
    
    Example Input: "Refactor src/main.rs to use async"
    Example Output:
    [INFO] Loading context from src/main.rs...
    [THOUGHT] The user wants to convert synchronous functions to async/await pattern.
    [THOUGHT] I need to check dependencies for 'tokio' in Cargo.toml.
    [ACTION] Reading Cargo.toml...
    [INFO] 'tokio' dependency found.
    [ACTION] Parsing src/main.rs AST...
    [EDIT] Applying changes to 'fn main' -> 'async fn main'
    [SUCCESS] Refactoring complete. 2 files modified.
    
    Do not use markdown code blocks. Just raw text suitable for a terminal display.
    Keep the response relatively short (under 15 lines) for the demo.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `User ran command: promptline ${command}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Slightly creative for the simulation
      }
    });

    return response.text || "[ERROR] No output received from agent simulation.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return `[FATAL] Connection to neural engine failed.\nError: ${error.message || "Unknown error"}`;
  }
};