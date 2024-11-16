const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },  // Liste des compétences
  image: { type: String, required: true },  // URL de l'image
});

module.exports = mongoose.model('works', WorkSchema);
