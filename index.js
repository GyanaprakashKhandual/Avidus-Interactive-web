const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Import ASME data
const asmeData = require('./ASME/API.json');

//Import Mega jewelers data
const mjData = require('./MJ/API.json');

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Allow CORS for everyone
app.use(cors({
  origin: '*',  // allow all domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));

// ✅ API route
app.get('/api/asme', (req, res) => {
  res.json(asmeData);
});

app.get('/api/mj-api', (req, res) => {
  res.json(mjData);
})

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
