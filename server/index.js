const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Termslify Server is Running on 8080!');
});

const PORT = 8080; // Changed to 8080

const server = app
  .listen(PORT, () => {
    console.log(`✅ Server is officially AWAKE on port ${PORT}`);
  })
  .on('error', (err) => {
    console.log('❌ SERVER ERROR:', err.message);
  });
