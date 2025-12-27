// server/index.js

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { generateSummary } from './services/openaiService.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Termslify Server is alive!');
});

app.post('/api/summarize', async (req, res) => {
  const { text } = req.body;
  console.log('收 Received text for summarization...');

  try {
    const summary = await generateSummary(text);
    res.json({ summary });
  } catch (error) {
    console.error('Route Error:', error.message);
    res.status(500).json({ error: 'Failed to summarize' });
  }
});

const PORT = 3001;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Termslify Brain is ONLINE at http://localhost:${PORT}`);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(
      `❌ PORT ${PORT} IS BUSY. Close the other terminal or run: kill -9 $(lsof -t -i:${PORT})`
    );
  } else {
    console.error('❌ SERVER ERROR:', e);
  }
});
