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

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, CSS3
- **Backend:** Node.js, Express.js
- **Intelligence:** OpenAI API
- **Environment:** Dotenv, Nodemon

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
