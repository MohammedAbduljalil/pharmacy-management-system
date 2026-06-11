require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('express-async-errors');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8081',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date(),
    port: process.env.PORT || 8080 
  });
});

// API Routes placeholder
app.get('/api', (req, res) => {
  res.json({ message: 'Pharmacy Management System API v1.0' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(error.status || 500).json({
    message: error.message || 'Internal server error'
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`✅ Pharmacy Management Backend running on port ${PORT}`);
  console.log(`📡 API URL: http://localhost:${PORT}/api`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
});

module.exports = app;
