const express = require('express');
const router = express.Router();
const Work = require('../models/Work');

// Route pour récupérer tous les projets
router.get('/', async (req, res) => {
  try {
    const works = await Work.find();
    res.json(works);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour récupérer un projet spécifique par ID
router.get('/:id', async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) return res.status(404).json({ message: "Projet non trouvé" });
    res.json(work);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;