const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// Route pour récupérer toutes les expériences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
