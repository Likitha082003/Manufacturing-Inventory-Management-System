const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const inventoryRoutes = require('./services/inventory/inventory.routes');
const alertsRoutes = require('./services/alerts/alerts.routes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventoryDB')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/inventory', inventoryRoutes);
app.use('/alerts', alertsRoutes);

// Start server
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
