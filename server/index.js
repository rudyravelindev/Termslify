const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { summarizeTerms } = require('./openaiService');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is alive and listening!');
});

app.post('/api/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    console.log('收 Received text for summarization...');
    const summary = await summarizeTerms(text);
    res.json({ summary });
  } catch (error) {
    console.error('Route Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// ... keep everything else the same ...

const PORT = 3001; // Change to 3001 temporarily to test

// We add '0.0.0.0' and a much more robust error handler
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Termslify Brain is ONLINE at http://localhost:${PORT}`);
  console.log("Terminal should be 'locked' now. Do not press anything.");
});

// If something is killing the server, this will tell us why
server.on('error', (e) => {
  console.error('❌ SERVER STARTUP ERROR:', e);
});

// Force the event loop to stay active
setInterval(() => {}, 1000);
