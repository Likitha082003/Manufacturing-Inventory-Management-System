const express = require('express');
const router = express.Router();
const Inventory = require('./inventory.model');

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST new item
router.post('/', async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

// PUT update item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE item
router.delete('/:id', async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
