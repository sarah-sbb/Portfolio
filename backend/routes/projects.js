// backend/routes/projects.js
const express = require('express');
const router = express.Router();

const projects = [
  { id: 1, title: 'Projet 1', description: 'Description du projet 1' },
  { id: 2, title: 'Projet 2', description: 'Description du projet 2' },
];

router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;