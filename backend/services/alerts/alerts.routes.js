const express = require('express');
const router = express.Router();
const Inventory = require('../inventory/inventory.model');

// GET alerts dynamically
router.get('/', async (req, res) => {
  try {
    const items = await Inventory.find();
    const alerts = items
      .filter(item => item.quantity < item.threshold)
      .map(item => ({
        _id: item._id,
        message: `${item.name} stock below threshold (Quantity: ${item.quantity}, Threshold: ${item.threshold})`
      }));
    res.json(alerts);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
