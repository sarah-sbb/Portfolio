const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Route pour récupérer toutes les actualités
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
