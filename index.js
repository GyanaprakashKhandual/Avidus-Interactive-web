const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Import ASME data
const asmeData = require('./ASME/API.json');

//Import Mega jewelers data
const mjData = require('./MJ/API.json');

const resolutionProData = require('./Resolution-Pro/API.json');
const resolutionProPerformanceTestData = require('./Resolution-Pro/performace.json');

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
});

app.get('/api/resolution-pro', (req, res) => {
  res.json(resolutionProData);
});

app.get('/api/resolution-pro-performance', (req, res) => {
  res.json(resolutionProPerformanceTestData); 
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
