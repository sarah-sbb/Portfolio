const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contenu: { type: String, required: true },
  image: { type: String, required: true },  // URL de l'image
});

module.exports = mongoose.model('News', NewsSchema);
