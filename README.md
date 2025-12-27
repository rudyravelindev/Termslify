# Termslify 📜⚡

**"Making the fine print crystal clear."**

Termslify is an AI-powered SaaS designed to protect users by instantly summarizing complex Terms and Conditions. It identifies hidden risks, legal traps, and data privacy concerns in seconds.

## 🚀 The Vision

Most people click "Accept" without reading. Termslify aims to bridge that gap by providing a "Legal Risk Score" for every digital agreement.

### Core Features:

- ✅ **Instant Summarization:** Powered by GPT-4o-mini to condense 50+ pages into 3 bullet points.
- ✅ **Risk Level Assessment:** Automatically categorizes documents into Low, Medium, or High risk.
- ⏳ **User Dashboard:** (In Progress) Save and track your legal history.
- ⏳ **Audio Summaries:** (In Progress) Listen to your terms on the go via AI Text-to-Speech.

---

## 📅 Progress Log

### Day 1: Foundation & Architecture

- Established Monorepo structure for seamless Full-Stack development.
- Configured **Express.js** backend with CORS and JSON parsing.
- Built a **React** frontend foundation using Vite.
- Resolved macOS Port 5000 conflicts to ensure environment stability.

### Day 2: The AI "Vertical Slice"

- **OpenAI Integration:** Successfully connected the `gpt-4o-mini` model to handle legal-specific prompts.
- **Security:** Implemented `.env` secret management to protect API credentials.
- **Robust Backend:** Built a POST endpoint to process large legal payloads.
- **Debugging:** Solved a critical Node.js "clean exit" bug by stabilizing the event loop and migrating the service to Port 3001.
- **Proof of Concept:** Successfully summarized Instagram's Terms of Service with a 100% success rate.

### Day 3: The "Enterprise Dashboard" & Logic Parser

- **UI Overhaul:** Migrated from a basic text box to a professional-grade dashboard using Tailwind CSS v4.

- **UVisual Risk Gauge:** Developed a dynamic 0-100 scoring system that color-codes the UI (Green/Amber/Red) based on legal severity.

- **UIntelligent Response Parsing:** Built a frontend logic engine to split raw AI strings into distinct sections: Executive Summary and Critical Risk Cards.

- **USaaS Branding:** Implemented a fixed-sidebar layout with a "Live Status" pulse indicator and professional user profile components.

- **URefined AI Prompting:** Optimized the System Message to ensure GPT-4o-mini returns data in a strict, parsable format (SCORE: | SUMMARY: | RISKS:).

- **UEnvironment Stability:** Standardized the server to ES Modules (ESM) to resolve module resolution conflicts and pathing errors.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, Tailwind CSS v4, Lucide-React
- **Backend:** Node.js(ESM),, Express.js
- **Intelligence:** OpenAI API (GPT-4o-mini)
- **Environment:** Dotenv, Nodemon, Axios

---

## 💻 Local Setup

1. **Clone the repo:**

```bash
git clone <your-repo-link>

```

2. **Configure Backend:**

- Navigate to `/server`.
- Create a `.env` file.
- Add `OPENAI_API_KEY=your_key_here`.
- Run `npm install`.
- Start with: `node index.js`.

3. **Configure Frontend:**

- Navigate to `/client`.
- Run `npm install`.
- Start with: `npm run dev`.

---

## 🛡️ License

MIT - Created by Rudy Ravelin as part of a #BuildInPublic SaaS Journey.

---
