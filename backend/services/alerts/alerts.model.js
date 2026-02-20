const mongoose = require('mongoose');

const alertsSchema = new mongoose.Schema({
  itemId: mongoose.Schema.Types.ObjectId,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', alertsSchema);
